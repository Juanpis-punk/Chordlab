const chords = document.querySelectorAll('.chord');
const timeline = document.getElementById('timeline');

chords.forEach(chord => {
  chord.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', chord.innerText);
  });
});

timeline.addEventListener('dragover', (e) => {
  e.preventDefault();
});

timeline.addEventListener('drop', (e) => {
  e.preventDefault();

  const chordText = e.dataTransfer.getData('text');

  const newChord = document.createElement('div');
  newChord.classList.add('track-chord');
  newChord.innerText = chordText;

  timeline.appendChild(newChord);

  const placeholder = document.querySelector('.placeholder');
  if (placeholder) placeholder.remove();
});