fetch('data/detections.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('detections-container');
    container.innerHTML = '';

    data.forEach(d => {
      const div = document.createElement('div');
      div.className = `detection severity-${d.severity}`;
      div.innerHTML = `
        <strong>${d.name}</strong><br>
        Host: ${d.host}<br>
        User: ${d.user}<br>
        IP: ${d.ip}<br>
        Hash: ${d.hash}<br>
        <em>${d.summary}</em><br>
        ${d.hash ? `<button onclick="window.open('https://www.virustotal.com/gui/search/${d.hash}', '_blank')">Search on VirusTotal</button>` : ''}
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('detections-container').innerText = 'Failed to load data.';
    console.error(err);
  });
