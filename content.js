const sensitiveDataRegex = /^(?:(?:\+1[2-9]\d{9}|\+44\d{10}|\+61\d{9}|\+91[6-9]\d{9}|\+86\d{11})|(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))$/;
const sensitiveDataMobile = /(?:(?:\+\d{1,2}\s?)?(?:\d{10}|\d{2}\s?\d{3}\s?\d{3}\s?\d{2}))/;
const sensitiveDataEmail = /(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

function monitorChatTextarea() {
  const chatTextarea = document.querySelector('textarea');
  // console.log('Text entered in chatTextarea: without chat extraction', chatTextarea);

  if (chatTextarea) {
    chatTextarea.addEventListener('input', () => {
      const text = chatTextarea.value;
      // console.log('Text entered in chatTextarea:', text);
      const sensitiveDataMatchesMobile = text.match(sensitiveDataMobile);
      const sensitiveDataMatchesEmail = text.match(sensitiveDataEmail);

      if (sensitiveDataMatchesMobile) {
        // console.log('Sensitive mobile number has been entered:', sensitiveDataMatchesMobile[0]);
        alert('Sensitive mobile number has been entered!');
      } else if (sensitiveDataMatchesEmail) {
        // console.log('Sensitive email data has been entered:', sensitiveDataMatchesEmail[0]);
        alert('Sensitive email data has been entered!');
      }
    });
  } else {
    setTimeout(monitorChatTextarea, 500);
  }
}

monitorChatTextarea();
