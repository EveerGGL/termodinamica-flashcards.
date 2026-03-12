/* --- BASE DE DATOS DE PREGUNTAS --- */
const baseData = [
    { id: 1, q: "How is the thermal conductivity rate defined?", shortA: "It is defined as the amount of energy transferred per unit of time through a material due to a temperature difference.", longA: "The thermal conductivity rate (H) is the amount of heat energy transferred per unit of time through a specific material. It is driven by a temperature gradient and describes how efficiently thermal energy moves from a high-temperature region to a low-temperature region." },
    { id: 2, q: "What are the units of thermal conductivity?", shortA: "The units are W/(m·K) or W/(m·°C).", longA: "The standard units are Watts per meter-Kelvin (W/(m·K)) or Watts per meter-degree Celsius (W/(m·°C)). Note that 1 Watt equals 1 Joule per second (J/s), emphasizing that it is a rate of energy flow." },
    { id: 3, q: "In the thermal conductivity equation, what does the k constant represent?", shortA: "It represents the thermal conductivity constant of the material.", longA: "The constant k represents the thermal conductivity, an intrinsic physical property of the material. It quantifies the material's ability to conduct heat; materials with high k (like metals) are conductors, while those with low k (like wood) are insulators." },
    { id: 4, q: "What does the variable A represent in the energy transfer formula?", shortA: "It represents the cross-sectional area through which energy transfer occurs.", longA: "The variable A represents the cross-sectional area perpendicular to the direction of heat flow. A larger area provides more space for molecular collisions to occur, thereby increasing the total amount of energy transferred." },
    { id: 5, q: "What is the difference between power and the rate of thermal conductivity?", shortA: "Power is the general rate of energy transfer or work per unit of time, while the rate of thermal conductivity is specifically the heat energy transferred due to a temperature gradient.", longA: "Power is a general physical quantity representing any energy transfer or work done per unit of time (P = dE/dt). The rate of thermal conductivity is a specific application of power that refers only to the transfer of heat energy through a medium due to temperature differences." },
    { id: 6, q: "How is 'thickness' represented in the thermal conductivity rate equation?", shortA: "It is represented by the variable L (or sometimes d) in the denominator of the rate equation.", longA: "Thickness is represented as L (or d) in the denominator of the conduction equation. This indicates an inverse relationship: the thicker the material, the more resistance it offers to heat flow, resulting in a lower transfer rate." },
    { id: 7, q: "What are the units of the k constant in the thermal conductivity equation?", shortA: "The units are W/(m·K).", longA: "The units of the constant k are W/(m·K)." },
    { id: 8, q: "Which material ranks higher in thermal conductivity: silver or aluminum?", shortA: "Silver ranks higher than aluminum.", longA: "Silver ranks higher in thermal conductivity than aluminum. Silver has one of the highest values for any metal due to its efficient lattice structure and free electrons." },
    { id: 9, q: "Where does 'Vacuum insulation' fall on the thermal conductivity spectrum?", shortA: "It falls at the lowest end of the spectrum, acting as a near-perfect insulator.", longA: "Vacuum insulation falls at the lowest extreme of the thermal conductivity spectrum. Since conduction requires a physical medium (atoms or molecules) to transfer energy, a vacuum is a near-perfect insulator." },
    { id: 10, q: "Based on the diagram, in which direction does energy flow between two systems of different temperatures?", shortA: "Energy flows from the system with the higher temperature to the system with the lower temperature.", longA: "According to the Second Law of Thermodynamics, energy (Q) flows spontaneously from the system of higher temperature to the system of lower temperature until they reach thermal equilibrium." },
    { id: 11, q: "What are the units of power in the international system?", shortA: "The unit is the Watt (W).", longA: "The units of power in the International System (SI) are Watts (W)." },
    { id: 12, q: "According to the sources, is air a better or worse thermal conductor than water?", shortA: "Air is a worse thermal conductor (a better insulator) than water.", longA: "Air is a much worse thermal conductor than water, making air a better thermal insulator. This property is why 'trapped air' is used in materials like fiberglass or double-paned windows to reduce heat loss." },
    { id: 13, q: "What is the relationship between the cross-sectional area A and the amount of energy transfer per unit of time?", shortA: "They are directly proportional; as the area A increases, the amount of energy transfer per unit of time also increases.", longA: "The relationship is directly proportional: if you double the cross-sectional area A, the amount of energy transferred per unit of time (H) will also double, assuming the temperature gradient remains constant." },
    { id: 14, q: "Which material has a lower thermal conductivity: wood or concrete?", shortA: "Wood has a lower thermal conductivity than concrete.", longA: "Wood has a lower thermal conductivity than concrete. This makes wood a better insulator and explains why it feels less cold than concrete when both are at the same low temperature." },
    { id: 15, q: "What group of materials generally occupies the conductivity range between 10 and 100?", shortA: "This range is generally occupied by metals and certain alloys.", longA: "Materials in the 10 to 100 range typically include various metals and alloys, such as steel, iron, and lead." },
    { id: 16, q: "How does a temperature difference ΔT affect the rate of energy transfer H?", shortA: "The rate of energy transfer H is directly proportional to the temperature difference ΔT.", longA: "The rate of energy transfer H is directly proportional to the temperature difference (ΔT). A larger difference in temperature creates a steeper gradient, driving faster heat flow." },
    { id: 17, q: "Which gaseous materials are listed at the lower end of the thermal conductivity scale?", shortA: "Gaseous materials like air, argon, and krypton are at the lower end.", longA: "Gases like air, argon, and krypton are found at the lower end of the scale. Their molecules are far apart, which limits the frequency of collisions needed to pass thermal energy along." },
    { id: 18, q: "What physical property quantifies energy transfer per unit of time through a material due to a temperature difference?", shortA: "Thermal conductivity (k).", longA: "Thermal conductivity (k) is the property that quantifies energy transfer per unit of time through a material due to a temperature difference." },
    { id: 19, q: "In calorimetry, what formula is used to calculate heat transfer related to a change in temperature versus a change in phase?", shortA: "For temperature change: Q = mcΔT; for phase change: Q = m·L.", longA: "For a change in temperature, the formula is Q = mcΔT. For a phase change (where temperature is constant), the formula is Q = m·L, where L is the latent heat of fusion or vaporization." },
    { id: 20, q: "What is a calorie?", shortA: "It is the energy required to raise the temperature of 1 gram of water by 1 °C.", longA: "A calorie (cal) is defined as the amount of heat energy required to raise the temperature of 1 gram of water by 1 degree Celsius (specifically from 14.5 °C to 15.5 °C)." },
    { id: 21, q: "What is power?", shortA: "Power is the rate at which work is done or energy is transferred over time.", longA: "Power is the rate at which work is done or energy is transformed over time, expressed as P = W/t." },
    { id: 22, q: "What is the difference between a 'calorie (cal)' and a 'Calorie (Cal)'?", shortA: "A 'calorie' (cal) is the standard unit, while a 'Calorie' (Cal) is a kilocalorie (1,000 cal), typically used in nutrition.", longA: "A 'calorie' (cal) is the scientific unit (approx. 4.184 J), while a 'Calorie' (Cal) with a capital 'C' is a kilocalorie (1,000 cal), which is the unit used to measure energy in food." },
    { id: 23, q: "What is the definition of density?", shortA: "It is defined as mass per unit volume (ρ = m/V).", longA: "Density (ρ) is defined as the mass per unit volume of a substance (ρ = m/V)." },
    { id: 24, q: "Based on density, why does an iceberg float on liquid water?", shortA: "Ice floats because it is less dense than liquid water.", longA: "An iceberg floats because ice is less dense than liquid water. Water is unique because its solid form is less dense than its liquid form due to the hexagonal lattice structure formed by hydrogen bonds." },
    { id: 25, q: "How is 'internal energy' defined in relation to the microscopic components of a system?", shortA: "It is the total energy of the microscopic components (atoms and molecules) of a system.", longA: "Internal energy is the sum of all microscopic energies of a system, including the kinetic energy of translation, rotation, and vibration of molecules, plus the potential energy of the chemical bonds between them." },
    { id: 26, q: "What occurs during a 'phase change'?", shortA: "A physical transition where a substance changes its state of matter without a change in temperature.", longA: "A 'phase change' is a physical transition between states of matter (solid, liquid, gas). During this process, the temperature remains constant because the energy is used to break or form molecular bonds instead of increasing kinetic energy." },
    { id: 27, q: "Explain how adding heat to a system can affect its state.", shortA: "It can either increase the system's temperature or cause a change in its state (phase change).", longA: "Adding heat can increase the average kinetic energy of the particles (raising temperature) or, if at a transition point, provide the necessary latent heat to change the state of the system (e.g., melting ice)." },
    { id: 28, q: "In the linear thermal expansion, what does the α symbol represent?", shortA: "The symbol α represents the coefficient of linear expansion.", longA: "In the linear thermal expansion formula (ΔL = α·L_initial·ΔT), the symbol α represents the coefficient of linear expansion, which is a constant unique to each material." },
    { id: 29, q: "Which solid material has the highest average linear expansion coefficient?", shortA: "Polymers or certain metals like lead typically have high average linear expansion coefficients.", longA: "Solid materials like polymers (plastics) and certain metals such as lead or aluminum tend to have high average linear expansion coefficients compared to ceramics or glass." },
    { id: 30, q: "How does density change as the temperature increase?", shortA: "Generally, density decreases as temperature increases because the volume expands.", longA: "As temperature increases, the average distance between atoms usually increases (expansion), which causes the volume to increase and the density to decrease (ρ = m/V)." },
    { id: 31, q: "Explain how adding heat to a system can affect its state. (Duplicate)", shortA: "Heat can increase internal energy, resulting in a temperature rise or a change in state.", longA: "Adding heat increases the internal energy, which can change the state by overcoming intermolecular forces." },
    { id: 32, q: "What occurs during a 'phase change'? (Duplicate)", shortA: "A transition between solid, liquid, or gas phases.", longA: "A phase change involves a reorganization of molecular structure (e.g., from a rigid lattice in solids to a fluid state in liquids)." },
    { id: 33, q: "Define temperature.", shortA: "A measure of the average kinetic energy of the particles in a system.", longA: "Temperature is a quantitative measure of the 'hotness' or 'coldness' of an object and is proportional to the average kinetic energy of its microscopic components." },
    { id: 34, q: "How is 'heat' defined in the thermodynamic context?", shortA: "The transfer of energy between systems due solely to a temperature difference.", longA: "Heat is defined as the energy transferred between a system and its environment specifically due to a temperature difference between them." },
    { id: 35, q: "State the Zeroth Law of Thermodynamics.", shortA: "If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.", longA: "The Zeroth Law of Thermodynamics states that if systems A and B are each in thermal equilibrium with system C, then systems A and B are in thermal equilibrium with each other. This law allows us to define the concept of temperature and use thermometers." },
    { id: 36, q: "Name 3 different mechanisms through which energy can be transferred.", shortA: "Conduction, convection, and radiation.", longA: "The three mechanisms of energy transfer are conduction (direct contact), convection (movement of fluids), and radiation (electromagnetic waves)." },
    { id: 37, q: "What is the boiling point of water on the Celsius scale?", shortA: "100 °C.", longA: "The boiling point of water on the Celsius scale is 100 °C." },
    { id: 38, q: "How does the temperature change ΔT differ in the Celsius and the Kelvin Scales?", shortA: "The magnitude of the change is exactly the same on both scales (ΔT_Celsius = ΔT_Kelvin).", longA: "The magnitude of a temperature change is identical on both scales (ΔT_Celsius = ΔT_Kelvin) because the degree increments are the same size." },
    { id: 39, q: "State the First law of Thermodynamics.", shortA: "The change in internal energy of a system is equal to the heat added minus the work done by the system (ΔU = Q - W).", longA: "The First Law of Thermodynamics (Conservation of Energy) states that the change in internal energy (ΔU) of a system is equal to the heat (Q) added to the system minus the work (W) done by the system." },
    { id: 40, q: "State the Second Law of Thermodynamics.", shortA: "Entropy in an isolated system always tends to increase; heat cannot spontaneously flow from a colder to a hotter body.", longA: "The Second Law of Thermodynamics states that heat cannot spontaneously flow from a colder object to a hotter one, and that the total entropy of an isolated system always increases." },
    { id: 41, q: "In the equation, ΔU = Q - W, what does each symbol represent?", shortA: "ΔU is change in internal energy, Q is heat, and W is work.", longA: "In ΔU = Q - W, ΔU is the change in internal energy, Q is the net heat added to the system, and W is the work done by the system on its surroundings." },
    { id: 42, q: "The expression ΔU = Q - W is based on which fundamental principle?", shortA: "The principle of Conservation of Energy.", longA: "This expression is based on the fundamental principle of the Conservation of Energy." },
    { id: 43, q: "How is pressure defined?", shortA: "Force exerted perpendicularly per unit of area (P = F/A).", longA: "Pressure (P) is defined as the magnitude of the normal force (F) applied to a surface divided by the area (A) of that surface: P = F/A." },
    { id: 44, q: "Is internal energy a vector or a scalar and why?", shortA: "It is a scalar because it represents a total quantity of energy without a spatial direction.", longA: "Internal energy is a scalar because it represents a magnitude of energy (Joules) and does not have a spatial direction." },
    { id: 45, q: "Is heat a vector or a scalar and why?", shortA: "It is a scalar because it is energy in transit, not a vector quantity.", longA: "Heat is a scalar because it is energy in transit; while it flows from hot to cold, it does not obey vector addition rules and represents a quantity, not a vector." },
    { id: 46, q: "Is pressure a vector or a scalar and why?", shortA: "It is a scalar because it acts equally in all directions at a given point in a fluid.", longA: "Pressure is a scalar because in a fluid at rest, the pressure at a point is the same in all directions; it does not point in a specific direction until it acts upon a specific surface." },
    { id: 47, q: "Which are the state variables for an ideal gas?", shortA: "Pressure (P), Volume (V), Temperature (T), and number of moles (n).", longA: "The state variables for an ideal gas are Pressure (P), Volume (V), Temperature (T), and the amount of substance in moles (n)." },
    { id: 48, q: "What is a mol?", shortA: "The amount of substance containing 6.022 × 10²³ particles.", longA: "A mol is the amount of substance containing the same number of elementary entities as there are atoms in 0.012 kg of carbon-12 (approximately 6.022 × 10²³)." },
    { id: 49, q: "In the ideal gas equation, what are the required units for volume and pressure?", shortA: "Volume must be in cubic meters (m³) and pressure in Pascals (Pa).", longA: "In the ideal gas law (PV = nRT), the SI units are Pascals (Pa) for pressure and cubic meters (m³) for volume." },
    { id: 50, q: "Define the latent heat of vaporization.", shortA: "The energy required to change a unit mass of a substance from liquid to gas at constant temperature.", longA: "The latent heat of vaporization is the specific amount of energy required to change 1 kg of a substance from liquid to gas at its boiling point without changing its temperature." },
    { id: 51, q: "How does water behave between 0 °C and 4 °C?", shortA: "Water is anomalous; it contracts as it is heated from 0 °C to 4 °C.", longA: "Water behaves anomalously between 0 °C and 4 °C: it contracts as it is heated, meaning its volume decreases and its density increases in this range." },
    { id: 52, q: "Above 4 °C water expands with increasing temperature, in this case what happens to its density?", shortA: "The water expands, which causes its density to decrease.", longA: "Above 4 °C, water behaves normally; it expands as temperature increases, which causes its density to decrease." },
    { id: 53, q: "How many liters are there in a cubic meter?", shortA: "There are 1,000 liters in one cubic meter.", longA: "There are 1,000 liters in one cubic meter (1 m³ = 1000 L)." },
    { id: 54, q: "In the PV diagram, what is an isotherm?", shortA: "A curve representing states of a system at a constant temperature.", longA: "In a PV diagram, an isotherm is a curve representing a process that occurs at a constant temperature." },
    { id: 55, q: "In the PV diagram, how is the isobaric process drawn?", shortA: "It is drawn as a horizontal line.", longA: "An isobaric process (constant pressure) is drawn as a horizontal line." },
    { id: 56, q: "In the PV diagram, how is the isochoric process drawn?", shortA: "It is drawn as a vertical line.", longA: "An isochoric process (constant volume) is drawn as a vertical line." },
    { id: 57, q: "What is the work of an isochoric process?", shortA: "The work is zero (W = 0).", longA: "The work done in an isochoric process is zero (W = 0) because work requires a change in volume (W = P·ΔV)." },
    { id: 58, q: "How is the isobaric work calculated?", shortA: "It is calculated as W = P * ΔV.", longA: "Isobaric work is calculated as W = P * (V_final - V_initial)." },
    { id: 59, q: "What is the main difference between force and pressure?", shortA: "Force is a vector quantity (a push or pull), while pressure is a scalar representing how that force is distributed over an area.", longA: "Force is a vector (it has a specific direction and magnitude), while pressure is a scalar that describes the distribution of force over an area." },
    { id: 60, q: "Explain why pressure is not a vector.", shortA: "It is a scalar because at any point in a fluid, it exerts force equally in all directions.", longA: "Pressure is not a vector because the force it exerts is always perpendicular to any surface it touches, regardless of the orientation of that surface; it doesn't have its own 'intrinsic' direction." }
];

/* --- LÓGICA DE NAVEGACIÓN --- */
function showMenu() {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.getElementById('menu-view').classList.add('active-view');
}

/* --- LÓGICA DE FLASHCARDS --- */
let deck = [];
let currentCard = null;

function startFlashcards() {
    // 1. Intentamos cargar el mazo guardado
    const savedDeck = localStorage.getItem('thermoDeck');

    if (savedDeck) {
        deck = JSON.parse(savedDeck);
        // Si el usuario ya había terminado todas las cartas, le reiniciamos el mazo
        if (deck.length === 0) {
            deck = [...baseData].sort(() => 0.5 - Math.random());
        }
    } else {
        // Primera vez: creamos el mazo y lo mezclamos
        deck = [...baseData].sort(() => 0.5 - Math.random());
    }
    
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.getElementById('flashcards-view').classList.add('active-view');
    nextCard();
}

function nextCard() {
    const flashcardElement = document.getElementById('flashcard');
    flashcardElement.classList.remove('is-flipped');
    
    document.getElementById('fc-controls').style.display = 'none';
    document.getElementById('fc-long-answer').style.display = 'none';
    document.getElementById('btn-show-more').style.display = 'inline-block';
    
    document.getElementById('fc-counter').innerText = `Cards remaining: ${deck.length}`;

    if (deck.length === 0) {
        alert("🎉 Congratulations! You have mastered all concepts.");
        showMenu();
        return;
    }

    currentCard = deck.shift();
    
    setTimeout(() => {
        document.getElementById('fc-question').innerText = currentCard.q;
        document.getElementById('fc-short-answer').innerText = currentCard.shortA;
        document.getElementById('fc-long-answer').innerText = currentCard.longA;
    }, 150);
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('is-flipped');
    
    if (flashcard.classList.contains('is-flipped')) {
        setTimeout(() => {
            document.getElementById('fc-controls').style.display = 'flex';
        }, 500);
    }
}

function toggleLongAnswer(e) {
    e.stopPropagation();
    document.getElementById('fc-long-answer').style.display = 'block';
    document.getElementById('btn-show-more').style.display = 'none';
}

function rateCard(rating) {
    if (rating === 'aprendido') {
        // Se descarta
    } else if (rating === 'repasar') {
        deck.push(currentCard);
    } else if (rating === 'nosabia') {
        const insertIndex = Math.min(2, deck.length); 
        deck.splice(insertIndex, 0, currentCard);
    }
    
    // GUARDAMOS EL PROGRESO
    localStorage.setItem('thermoDeck', JSON.stringify(deck));
    nextCard();
}

function resetFlashcards() {
    if(confirm("Are you sure you want to reset your Flashcards progress? All 60 cards will return.")) {
        localStorage.removeItem('thermoDeck');
        alert("Flashcards progress reset successfully!");
    }
}

function resetMatching() {
    if(confirm("Are you sure you want to reset your Matching progress? All 60 concepts will return.")) {
        localStorage.removeItem('thermoMatchPool');
        alert("Matching progress reset successfully!");
    }
}

/* --- LÓGICA DE EMPAREJAR --- */
let matchAttempts = 0;
let selectedConcept = null;
let selectedDef = null;
let matchesFound = 0;
let matchingPool = []; 
let currentRoundTarget = 5;

function startMatching() {
    matchAttempts = 0;
    document.getElementById('match-attempts').innerText = `Failed attempts: 0`;
    
    // 1. Intentamos cargar el pool guardado en el navegador
    const savedPool = localStorage.getItem('thermoMatchPool');

    if (savedPool) {
        matchingPool = JSON.parse(savedPool);
        // Si el usuario ya había terminado todas las preguntas, le reiniciamos el juego
        if (matchingPool.length === 0) {
            matchingPool = [...baseData].sort(() => 0.5 - Math.random());
        }
    } else {
        // Primera vez: creamos el pool completo y lo mezclamos
        matchingPool = [...baseData].sort(() => 0.5 - Math.random());
    }
    
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.getElementById('matching-view').classList.add('active-view');

    loadMatchRound();
}

function loadMatchRound() {
    matchesFound = 0;
    selectedConcept = null;
    selectedDef = null;

    const grid = document.querySelector('.matching-grid');
    grid.style.display = ''; 
    
    if (matchingPool.length === 0) {
        grid.style.display = 'block'; 
        grid.innerHTML = `
            <div style="text-align: center; padding: 40px; background-color: var(--card-bg); border-radius: 15px; box-shadow: var(--shadow);">
                <h3 style="color: var(--text-color);">All questions completed! 🎉</h3>
                <p>You have successfully reviewed all ${baseData.length} concepts.</p>
                <p style="color: #ff7675;">Total failed attempts: ${matchAttempts}</p>
                <button onclick="startMatching()" class="btn-success">🔄 Restart Game</button>
                <button onclick="showMenu()">🏠 Back to Menu</button>
            </div>
        `;
        return;
    }

    let gameSet = matchingPool.splice(0, 5);
    currentRoundTarget = gameSet.length;

    let concepts = gameSet.map(item => ({ id: item.id, text: item.q }));
    let definitions = gameSet.map(item => ({ id: item.id, text: item.shortA }));

    concepts.sort(() => 0.5 - Math.random());
    definitions.sort(() => 0.5 - Math.random());

    grid.innerHTML = `
        <div class="match-column" id="match-concepts"></div>
        <div class="match-column" id="match-definitions"></div>
    `;

    renderMatchColumn('match-concepts', concepts, 'concept');
    renderMatchColumn('match-definitions', definitions, 'def');
}

function renderMatchColumn(containerId, items, type) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.innerText = item.text;
        div.onclick = () => handleMatchSelect(div, item.id, type);
        container.appendChild(div);
    });
}

function handleMatchSelect(element, id, type) {
    if (type === 'concept') {
        if (selectedConcept && selectedConcept.element === element) return resetMatchSelection('concept');
        if (selectedConcept) selectedConcept.element.classList.remove('selected');
        selectedConcept = { element, id };
    } else {
        if (selectedDef && selectedDef.element === element) return resetMatchSelection('def');
        if (selectedDef) selectedDef.element.classList.remove('selected');
        selectedDef = { element, id };
    }

    element.classList.add('selected');

    if (selectedConcept && selectedDef) {
        checkMatch();
    }
}

function resetMatchSelection(type) {
    if (type === 'concept' && selectedConcept) {
        selectedConcept.element.classList.remove('selected');
        selectedConcept = null;
    }
    if (type === 'def' && selectedDef) {
        selectedDef.element.classList.remove('selected');
        selectedDef = null;
    }
}

function checkMatch() {
    const isMatch = selectedConcept.id === selectedDef.id;
    const el1 = selectedConcept.element;
    const el2 = selectedDef.element;

    if (isMatch) {
        setTimeout(() => {
            el1.classList.add('hidden');
            el2.classList.add('hidden');
        }, 300);
        matchesFound++;
        
        if (matchesFound === currentRoundTarget) {
            // ¡NUEVO!: GUARDAMOS EL PROGRESO AL COMPLETAR LA RONDA
            localStorage.setItem('thermoMatchPool', JSON.stringify(matchingPool));

            setTimeout(() => {
                if (matchingPool.length > 0) {
                    showRoundComplete(); 
                } else {
                    loadMatchRound(); 
                }
            }, 500);
        }
    } else {
        matchAttempts++;
        document.getElementById('match-attempts').innerText = `Failed attempts: ${matchAttempts}`;
        
        el1.classList.add('error');
        el2.classList.add('error');
        
        setTimeout(() => {
            el1.classList.remove('error');
            el2.classList.remove('error');
        }, 1000);
    }

    el1.classList.remove('selected');
    el2.classList.remove('selected');
    selectedConcept = null;
    selectedDef = null;
}

function showRoundComplete() {
    const grid = document.querySelector('.matching-grid');
    grid.style.display = 'block'; 
    
    grid.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: var(--card-bg); border-radius: 15px; box-shadow: var(--shadow);">
            <h3 style="color: var(--text-color);">Excellent! Round completed. ✅</h3>
            <p>Remaining concepts: <strong>${matchingPool.length}</strong></p>
            <button onclick="loadMatchRound()" class="btn-success" style="margin-top: 20px;">▶️ Practice next 5</button>
            <button onclick="showMenu()">🏠 Back to Menu</button>
        </div>
    `;
}