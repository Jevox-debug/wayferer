const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    header.classList.toggle("sticky",window.scrollY > 0);

});

function openModal(title, image, price, duration, description, activities, region, transport, parking) {
    const modal = document.getElementById('locationModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDuration').textContent = duration;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalRegion').textContent = region;
    document.getElementById('modalTransport').textContent = transport;
    document.getElementById('modalParking').textContent = parking;
    
    // Populate activities
    const activitiesList = document.getElementById('modalActivities');
    activitiesList.innerHTML = '';
    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activitiesList.appendChild(li);
    });
    
    modal.style.display = 'block';

    // Close modal when clicking the X button
    document.querySelector('.close-modal').onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}