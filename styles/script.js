fetch('projets.json')
    .then(response => response.json())
    .then(data => {
        let projetsList = document.querySelector('.mes_projets');
        data.forEach(projet => {
            let projetElement = document.createElement('div');
            projetElement.classList.add('projet_unique');
            projetElement.setAttribute('data-titre', projet.titre);
            projetElement.setAttribute('data-description', projet.description);
            projetElement.setAttribute('data-annee', projet.annee);

            let image = document.createElement('img');
            image.src = projet.image;
            image.alt = projet.titre;
            projetElement.appendChild(image);

            projetsList.appendChild(projetElement);

            // Ajouter l'événement click sur l'image
            image.addEventListener('click', function() {
                // Afficher les informations dans la modale
                document.getElementById('modal-titre').textContent = projet.titre;
                document.getElementById('modal-description').textContent = projet.description;
                document.getElementById('modal-annee').textContent = projet.annee;

                // Afficher la modale
                let modal = document.getElementById('myModal');
                modal.style.display = 'block';

                // Ajouter les écouteurs d'événement pour fermer la modale
                let span = document.getElementsByClassName('close')[0];
                span.onclick = function() {
                    modal.style.display = 'none';
                }

                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = 'none';
                    }
                }
            });
        });
    })
    .catch(error => console.error('Error:', error));