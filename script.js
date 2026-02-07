// official council email list
const councilMembers = [
    { name: "Mayor John Whitmire", email: "mayor@houstontx.gov", label: "Mayor" },
    { name: "Amy Peck", email: "districta@houstontx.gov", label: "District A" },
    { name: "Tarsha Jackson", email: "districtb@houstontx.gov", label: "District B" },
    { name: "Abbie Kamin", email: "districtc@houstontx.gov", label: "District C" },
    { name: "Carolyn Evans-Shabazz", email: "districtd@houstontx.gov", label: "District D" },
    { name: "Fred Flickinger", email: "districte@houstontx.gov", label: "District E" },
    { name: "Tiffany D. Thomas", email: "districtf@houstontx.gov", label: "District F" },
    { name: "Mary Nan Huffman", email: "districtg@houstontx.gov", label: "District G" },
    { name: "Mario Castillo", email: "districth@houstontx.gov", label: "District H" },
    { name: "Joaquin Martinez", email: "districti@houstontx.gov", label: "District I" },
    { name: "Edward Pollard", email: "districtj@houstontx.gov", label: "District J" },
    { name: "Martha Castex-Tatum", email: "districtk@houstontx.gov", label: "District K" },
    { name: "Julian Ramirez", email: "atlarge1@houstontx.gov", label: "At-Large 1" },
    { name: "Willie Davis", email: "atlarge2@houstontx.gov", label: "At-Large 2" },
    { name: "Twila Carter", email: "atlarge3@houstontx.gov", label: "At-Large 3" },
    { name: "Alejandra Salinas", email: "atlarge4@houstontx.gov", label: "At-Large 4" },
    { name: "Sallie Alcorn", email: "atlarge5@houstontx.gov", label: "At-Large 5" }
];

const selectElement = document.getElementById('councilSelect');
const emailBtn = document.getElementById('emailBtn');

// populate dropdown
councilMembers.forEach(member => {
    const option = document.createElement('option');
    option.value = member.email;
    option.textContent = `${member.label} - ${member.name}`;
    selectElement.appendChild(option);
});

// enable button at selection
selectElement.addEventListener('change', () => {
    emailBtn.disabled = false;
});

// handle email button click
emailBtn.addEventListener('click', () => {
    const email = selectElement.value;
    const subject = encodeURIComponent("Thank You for Supporting Houston's Arts Sector");
    const body = encodeURIComponent(
        "Dear Council Member [name],\n\n" +
        "I am writing to thank you for supporting the City's investment in arts grants and the Civic Art Program. These programs, administered by Houston Arts Alliance, are vital to our city's future.\n\n" +
        "The arts are a powerhouse for our economy. In 2025 alone, the City's investment of Hotel Occupancy Tax revenue supported 418 grants totaling over $16.1 million. These programs deliver a strong return on investment: boosting tourism, supporting over 12,000 jobs, and ensuring Houston remains a premier global destination.\n\n" +
        "Beyond the economic return, these investments provide the family-friendly experiences we depend on. From public art in our parks to local neighborhood festivals, City-funded arts programming creates the safe, vibrant spaces that make Houston a great place to live and raise a family.\n\n" +
        "I urge you to preserve and expand this investment. A well-funded arts sector is essential for Houston's resilience and long-term community growth.\n\n" +
        "Thank you for your leadership and your commitment to our city."
    );
    // open default email client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});