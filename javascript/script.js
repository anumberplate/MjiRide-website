const questions = document.querySelectorAll('.question-FAQ');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    document.querySelectorAll('.answer-FAQ').forEach(a => {
      if (a !== answer) a.classList.remove('show');
    });

    answer.classList.toggle('show');
  });
});