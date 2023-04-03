const sensitiveDataRegex = /((\d{3}-\d{2}-\d{4})|(\d{3}\.\d{2}\.\d{4})|(\d{3} \d{2} \d{4})|(\d{10})|(\d{3}[\s-]\d{3}[\s-]\d{4})|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}))/g;

function monitorChatTextarea() {
  const chatTextarea = document.evaluate('//*[@id="__next"]/div[2]/div[1]/main/div[2]/form/div/div[2]/textarea', document, null, 9, null);

  if (chatTextarea.singleNodeValue) {
    chatTextarea.singleNodeValue.addEventListener('input', () => {
      const text = chatTextarea.singleNodeValue.value;
      const sensitiveDataMatches = text.match(sensitiveDataRegex);

      if (sensitiveDataMatches) {
        alert('Sensitive data detected!');
      }
    });
  } else {
    setTimeout(monitorChatTextarea, 500);
  }
}

monitorChatTextarea();
