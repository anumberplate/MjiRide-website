const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Hide all other answers
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== answer) a.classList.remove('show');
    });

    // Toggle current answer
    answer.classList.toggle('show');
  });
});