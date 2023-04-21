// Debounce
export const debounce = (func: Function, wait: number): Function => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Throttle
export const throttle = (func: Function, wait: number): Function => {
  let timeout;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(this, args);
      }, wait);
    }
  };
};

// Format file size
export const formatFileSize = (size: number): string => {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

// 判断当前设备是否为移动端
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
};
