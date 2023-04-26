import Clipboard from 'clipboard';

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });
  clipboard.on('success', (e) => {
    console.log("copy success ", text);
    clipboard.destroy();
  });
  clipboard.on('error', (e) => {
    console.error("copy error ", text);
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
