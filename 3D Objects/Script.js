const buyBtns = document.querySelectorAll('[id="buy-btn"]');
  const paymentForm = document.getElementById('payment-form');

  for (let i = 0; i < buyBtns.length; i++) {
    buyBtns[i].addEventListener('click', () => {
      window.location.href='payment.html';
    });
  }