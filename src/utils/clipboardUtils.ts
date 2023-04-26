import Clipboard from "clipboard";
export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on("success", (e) => {
    clipboard.destroy();
  });
  clipboard.on("error", (e) => {
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
