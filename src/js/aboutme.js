function toggleSection(sectionId) {
    const description = document.getElementById('description');
    const skills = document.getElementById('skills');
    const rrss = document.getElementById('rrss');

    // Oculta todas las secciones
    description.style.display = 'none';
    skills.style.display = 'none';
    rrss.style.display = 'none';

    // Muestra la sección seleccionada
    if (sectionId === 'description') {
        description.style.display = 'block';
    } else if (sectionId === 'skills') {
        skills.style.display = 'block';
    } else if (sectionId === 'rrss') {
        rrss.style.display = 'block';
    }
}
