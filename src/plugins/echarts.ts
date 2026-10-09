import { Ref } from "vue";
import type { EChartsOption } from "echarts";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import {
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  PictorialBarChart,
  RadarChart,
  ScatterChart,
} from "echarts/charts";

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  LegendComponent,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent,
} from "echarts/components";

// ECharts 6 changed the default theme (palette, legend at the bottom, ...).
// Register the bundled v5 theme so the charts keep their v5 layout.
import "echarts/theme/v5";

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,

  PictorialBarChart,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent,
  ScatterChart,
]);

export default echarts;

export enum RenderType {
  SVGRenderer = "SVGRenderer",
  CanvasRenderer = "CanvasRenderer",
}

export enum ThemeType {
  Light = "light",
  Dark = "dark",
  Default = "default",
}

// ECharts 5 theme values that ECharts 6 no longer applies by default. They are global
// options, merged under each chart option so individual charts can still override them.
const V5_GRADIENT_COLOR = ["#f6efa6", "#d88273", "#bf444c"];

const V5_THEME_OPTIONS: Record<ThemeType, { theme: string; option: EChartsOption }> = {
  [ThemeType.Default]: { theme: "v5", option: {} },
  // the v5 "light" theme (now echarts/theme/rainbow) only replaced the palette
  [ThemeType.Light]: {
    theme: "v5",
    option: {
      color: [
        "#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293",
        "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF",
      ],
    },
  },
  [ThemeType.Dark]: {
    theme: "dark",
    option: {
      backgroundColor: "#100C2A",
      gradientColor: V5_GRADIENT_COLOR,
      color: [
        "#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9",
        "#05c091", "#ff8a45", "#8d48e3", "#dd79ff",
      ],
    },
  },
};

export function useChart(
  elRef: Ref<HTMLDivElement>,
  autoChartSize = false,
  animation: boolean = false,
  render: RenderType = RenderType.SVGRenderer,
  theme: ThemeType = ThemeType.Default
) {
  // 渲染模式
  echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer);
  // echart实例
  let chartInstance: echarts.ECharts | null = null;

  // 初始化echart
  const initCharts = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el, V5_THEME_OPTIONS[theme].theme);
  };

  // 更新/设置配置
  const setOption = (option: EChartsOption) => {
    nextTick(() => {
      if (!chartInstance) {
        initCharts();
        if (!chartInstance) return;
      }

      chartInstance.setOption({ ...V5_THEME_OPTIONS[theme].option, ...option });
      hideLoading();
    });
  };

  // 获取echart实例
  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  }

  // 更新大小
  function resize() {
    chartInstance?.resize();
  }

  // 监听元素大小
  function watchEl() {
    // 给元素添加过渡
    if (animation) {
      elRef.value.style.transition = "width 1s, height 1s";
    }
    const resizeObserver = new ResizeObserver((entries) => resize());
    resizeObserver.observe(elRef.value);
  }

  // 显示加载状态
  function showLoading() {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.showLoading();
  }
  // 显示加载状态
  function hideLoading() {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.hideLoading();
  }

  onMounted(() => {
    window.addEventListener("resize", resize);
    if (autoChartSize) watchEl();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  });

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading,
  };
}
