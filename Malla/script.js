document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    const app = {
        cycles: 10,
        coursesPerCycle: 7,
        totalCourses: 70,
        completedCourses: 0,

        // Default course names
        defaultCourseNames: {
            1: {
                1: 'DIBUJO ASISTIDO POR COMPUTADORA',
                2: 'MECÁNICA',
                3: 'QUÍMICA GENERAL',
                4: 'ANÁLISIS MATEMÁTICO',
                5: 'INTRODUCCIÓN A LA INGENIERÍA INFORMÁTICA',
                6: 'LENGUA CASTELLANA',
                7: 'NTACs NUEVAS TECNOLOGÍAS DE APRENDIZAJE'
            },
            2: {
                1: 'FUNDAMENTOS Y METODOLOGÍA DE LA PROGRAMACIÓN',
                2: 'MECÁNICA DE FLUIDOS',
                3: 'ÁLGEBRA LINEAL',
                4: 'CÁLCULO DIFERENCIAL E INTEGRAL',
                5: 'BIOLOGÍA GENERAL',
                6: 'COMPRENSIÓN Y REDACCIÓN DE TEXTOS',
                7: 'INGLÉS I'
            },
            3: {
                1: 'PROGRAMACIÓN ORIENTADA A OBJETOS',
                2: 'GESTIÓN DE DATOS I',
                3: 'ESTADISTICA DESCRIPTIVA',
                4: 'ECUACIONES DIFERENCIALES',
                5: 'CIRCUITOS DIGITALES',
                6: 'LOGICA MATEMATICA',
                7: 'INGLÉS II'
            },
            4: {
                1: ' ESTRUCTURA DE DATOS CON POO',
                2: 'GESTIÓN DE DATOS II',
                3: ' ESTADISTICA INFERENCIAL',
                4: 'CÁLCULO NÚMERICO',
                5: 'METODOLOGÍA DE LA INVESTIGACIÓN',
                6: 'FILOSOFÍA CIENCIA Y TECNOLOGÍA',
                7: 'INGLÉS III'
            },
            5: {
                1: 'TALLER DE DESARROLLO DE SOFTWARE I',
                2: 'FUNDAMENTOS DE SISTEMAS DE INFORMACIÓN',
                3: 'CRIPTOGRAFÍA I',
                4: 'TALLER DE PROCESAMIENTO DISTRIBUIDO',
                5: 'TALLER DE INNOVACIÓN TECNOLÓGICA',
                6: 'ÉTICA, RESPONSABILIDAD SOCIAL Y AMBIENTAL',
                7: 'PRACTICAS INDIVIDUALES I'
            },
            6: {
                1: 'TALLER DE DESARROLLO DE SOFTWARE II',
                2: 'PLANEAMIENTO ESTRATEGICO EMPRESARIAL',
                3: 'CRIPTOGRAFÍA II',
                4: 'INFRAESTRUCTURA DE REDES CORPORATIVAS',
                5: 'CONECTIVIDAD DE REDES',
                6: 'REALIDAD NACIONAL E INTERNACIONAL',
                7: 'PRACTICAS INDIVIDUALES II'
            },
            7: {
                1: 'INGENIERIA DE SOFTWARE',
                2: 'PLANEAMIENTO DE TECNOLOGIAS DE INFORMACION',
                3: 'SEGURIDAD DE LA INFORMACION',
                4: 'ADMINISTRACION DE SERVICIOS DE RED',
                5: 'SISTEMAS OPERATIVOS',
                6: 'TALLERES DE ARTES',
                7: 'PRACTICAS INDIVIDUALES III'
            },
            8: {
                1: 'EVALUACION DE CALIDAD DE SOFTWARE',
                2: 'FORMULACION Y EVALUACION DE PROYECTOS INFORMATICOS',
                3: ' AUDITORIA Y SEGURIDAD DE LA INFORMACION',
                4: 'TALLER DE REDES DE VOZ Y VIDEO',
                5: 'SISTEMAS INTELIGENTES',
                6: 'EMPRENDIMIENTO E INNOVACION',
                7: 'REDES NEURONALES (e)'
            },
            9: {
                1: 'DESARROLLO DE APLICACIONES WEB',
                2: 'GERENCIA DE TECNOLOGIAS DE INFORMACION',
                3: ' DERECHO INFORMATICO',
                4: ' CLOUD COMPUTING (IN ENGLISH)',
                5: 'PROYECTO DE TESIS I',
                6: 'DEONTOLOGIA PROFESIONAL Y DISCAPACIDAD',
                7: 'INTELIGENCIA DE NEGOCIOS (e)'
            },
            10: {
                1: 'DEVELOPMENT OF MOBILE APPLICATIONS (IN ENGLISH)',
                2: 'GESTION DEL CONOCIMIENTO',
                3: 'INFORMATICA FORENCE Y DELITOS INFORMATICOS',
                4: ' ETHICAL HACKING (IN ENGLISH)',
                5: 'PROYECTO DE TESIS II - TRABAJO DE INVESTIGACIÓN',
                6: 'PRACTICAS PRE PROFESIONALES',
                7: 'PRACTICAS INDIVIDUALES IV'
            }
        },

        // Add prerequisites mapping
        prerequisites: {
            // Cycle 1 has no prerequisites
            "1-1": [],
            "1-2": [],
            "1-3": [],
            "1-4": [],
            "1-5": [],
            "1-6": [],
            "1-7": [],

            // Cycle 2 prerequisites
            "2-1": [],
            "2-2": ["1-2"],
            "2-3": ["1-4"],
            "2-4": ["1-4"],
            "2-5": [],
            "2-6": ["1-6"],
            "2-7": [],

            // Cycle 3 prerequisites
            "3-1": ["2-1"],
            "3-2": ["2-1"],
            "3-3": [],
            "3-4": ["2-4"],
            "3-5": ["2-2"],
            "3-6": ["2-3"],
            "3-7": ["2-7"],

            // Cycle 4 prerequisites
            "4-1": ["3-1"],
            "4-2": ["3-2"],
            "4-3": ["3-3", "3-4"],
            "4-4": ["3-4"],
            "4-5": ["1-5"],
            "4-6": ["3-6"],
            "4-7": ["3-7"],

            // Cycle 5 prerequisites
            "5-1": ["4-1"],
            "5-2": ["4-2"],
            "5-3": ["2-1", "4-4"],
            "5-4": ["4-1"],
            "5-5": ["4-5"],
            "5-6": ["4-6"],
            "5-7": ["4-6"],

            // Cycle 6 prerequisites
            "6-1": ["5-1"],
            "6-2": ["5-2"],
            "6-3": ["5-3"],
            "6-4": ["5-4"],
            "6-5": ["5-5"],
            "6-6": ["5-6"],
            "6-7": ["5-7"],

            // Cycle 7 prerequisites
            "7-1": ["6-1"],
            "7-2": ["6-2"],
            "7-3": ["6-3"],
            "7-4": ["6-4"],
            "7-5": ["6-4"],
            "7-6": ["6-6"],
            "7-7": ["6-7"],

            // Cycle 8 prerequisites
            "8-1": ["7-1"],
            "8-2": ["7-2"],
            "8-3": ["7-3"],
            "8-4": ["7-4"],
            "8-5": ["7-1"],
            "8-6": ["7-6"],
            "8-7": ["7-1"],

            // Cycle 9 prerequisites
            "9-1": ["8-1"],
            "9-2": ["8-2"],
            "9-3": ["8-3"],
            "9-4": ["8-4"],
            "9-5": ["4-5"],
            "9-6": ["8-6"],
            "9-7": ["6-2"],

            // Cycle 10 prerequisites
            "10-1": ["9-1"],
            "10-2": ["9-2"],
            "10-3": ["9-3"],
            "10-4": ["9-4"],
            "10-5": ["9-5"],
            "10-6": ["7-1", "8-2", "8-4", "9-1"],
            "10-7": ["9-7"]
        },

        // State storage
        state: {
            courseNames: {},
            completedStatus: {},
            unlockedStatus: {}
        },

        init() {
            this.loadState();
            this.renderCurriculum();
            this.setupEventListeners();
            this.updateProgressIndicator();
            this.initTheme();
        },

        // Load state from localStorage
        loadState() {
            try {
                const savedState = localStorage.getItem('curriculum_state');
                if (savedState) {
                    this.state = JSON.parse(savedState);
                } else {
                    // Initialize default state
                    this.resetState();
                }
            } catch (error) {
                console.error('Error loading state:', error);
                this.resetState();
            }
        },

        // Save state to localStorage
        saveState() {
            try {
                localStorage.setItem('curriculum_state', JSON.stringify(this.state));
            } catch (error) {
                console.error('Error saving state:', error);
            }
        },

        // Reset state to defaults
        resetState() {
            this.state = {
                courseNames: JSON.parse(JSON.stringify(this.defaultCourseNames)),
                completedStatus: {},
                unlockedStatus: {}
            };

            // Set initially unlocked courses (those with no prerequisites)
            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    if (this.prerequisites[courseId] && this.prerequisites[courseId].length === 0) {
                        this.state.unlockedStatus[courseId] = true;
                    }
                }
            }

            this.saveState();
        },

        // Render the curriculum grid
        renderCurriculum() {
            const curriculumGrid = document.getElementById('curriculum-grid');
            curriculumGrid.innerHTML = '';

            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                const cycleContainer = document.createElement('div');
                cycleContainer.classList.add('cycle-container', 'mb-6');
                cycleContainer.setAttribute('data-cycle', cycle);

                // Create cycle header
                const cycleHeader = document.createElement('div');
                cycleHeader.classList.add('cycle-header', 'flex', 'justify-between', 'items-center', 'mb-2', 'pb-2', 'border-b', 'border-gray-300', 'dark:border-gray-700');

                const cycleTitle = document.createElement('h2');
                cycleTitle.classList.add('text-xl', 'font-semibold');
                cycleTitle.textContent = `Ciclo ${cycle}`;

                const cycleProgress = document.createElement('span');
                cycleProgress.classList.add('text-sm', 'text-gray-500');
                cycleProgress.id = `cycle-${cycle}-progress`;
                cycleProgress.textContent = '0/7 completados';

                cycleHeader.appendChild(cycleTitle);
                cycleHeader.appendChild(cycleProgress);
                cycleContainer.appendChild(cycleHeader);

                // Create courses grid
                const coursesGrid = document.createElement('div');
                coursesGrid.classList.add('cycle-courses', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'xl:grid-cols-7', 'gap-4');

                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    const isUnlocked = this.state.unlockedStatus[courseId] || false;
                    const isCompleted = this.state.completedStatus[courseId] || false;

                    const courseName = this.getCourseTitle(cycle, course);

                    const courseCard = document.createElement('div');
                    courseCard.classList.add('course-card', 'p-4', 'rounded-lg', 'shadow-md', 'h-32', 'flex', 'flex-col', 'justify-between');
                    courseCard.setAttribute('data-course-id', courseId);
                    courseCard.setAttribute('tabindex', isUnlocked ? '0' : '-1');

                    if (!isUnlocked) {
                        courseCard.classList.add('locked-card');
                        const lockIcon = document.createElement('i');
                        lockIcon.classList.add('fas', 'fa-lock', 'lock-icon');
                        courseCard.appendChild(lockIcon);
                    } else if (isCompleted) {
                        courseCard.classList.add('completed-card');
                        const checkmark = document.createElement('i');
                        checkmark.classList.add('fas', 'fa-check-circle', 'checkmark');
                        courseCard.appendChild(checkmark);
                    }

                    const courseTitle = document.createElement('h3');
                    courseTitle.classList.add('font-medium');
                    courseTitle.textContent = courseName;

                    const courseInfo = document.createElement('div');
                    courseInfo.classList.add('text-sm', 'text-gray-500');
                    courseInfo.textContent = `Curso ${course}`;

                    courseCard.appendChild(courseTitle);
                    courseCard.appendChild(courseInfo);

                    if (isUnlocked && !isCompleted) {
                        courseCard.addEventListener('click', () => {
                            this.markCourseComplete(courseId);
                        });
                        courseCard.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                this.markCourseComplete(courseId);
                                e.preventDefault();
                            }
                        });
                    }

                    coursesGrid.appendChild(courseCard);
                }

                cycleContainer.appendChild(coursesGrid);
                curriculumGrid.appendChild(cycleContainer);
            }

            this.updateCycleProgress();
        },

        // Update the progress indicator for all cycles
        updateCycleProgress() {
            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                let completed = 0;
                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    if (this.state.completedStatus[courseId]) {
                        completed++;
                    }
                }

                const progressElement = document.getElementById(`cycle-${cycle}-progress`);
                if (progressElement) {
                    progressElement.textContent = `${completed}/${this.coursesPerCycle} completados`;
                }
            }
        },

        // Update the overall progress indicator
        updateProgressIndicator() {
            const completedCoursesElem = document.getElementById('completed-courses');
            const totalCoursesElem = document.getElementById('total-courses');
            const progressBarElem = document.getElementById('progress-bar');

            let completed = 0;
            for (const key in this.state.completedStatus) {
                if (this.state.completedStatus[key]) {
                    completed++;
                }
            }

            this.completedCourses = completed;

            completedCoursesElem.textContent = completed;
            totalCoursesElem.textContent = this.totalCourses;

            const progressPercentage = (completed / this.totalCourses) * 100;
            progressBarElem.style.width = `${progressPercentage}%`;
        },

        // Get the title of a course
        getCourseTitle(cycle, course) {
            if (this.state.courseNames[cycle] && this.state.courseNames[cycle][course]) {
                return this.state.courseNames[cycle][course];
            } else if (this.defaultCourseNames[cycle] && this.defaultCourseNames[cycle][course]) {
                return this.defaultCourseNames[cycle][course];
            } else {
                return `Curso ${course} (Ciclo ${cycle})`;
            }
        },

        // Mark a course as complete
        markCourseComplete(courseId) {
            if (!this.state.unlockedStatus[courseId]) return;

            this.state.completedStatus[courseId] = true;
            this.saveState();

            // Update UI for this course
            const courseCard = document.querySelector(`[data-course-id="${courseId}"]`);
            if (courseCard) {
                courseCard.classList.add('completed-card');

                if (!courseCard.querySelector('.checkmark')) {
                    const checkmark = document.createElement('i');
                    checkmark.classList.add('fas', 'fa-check-circle', 'checkmark');
                    courseCard.appendChild(checkmark);
                }
            }

            // Check for newly unlockable courses based on prerequisites
            const newlyUnlockedByCycle = {};

            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const targetCourseId = `${cycle}-${course}`;

                    // Skip if already unlocked
                    if (this.state.unlockedStatus[targetCourseId]) continue;

                    // Check if all prerequisites are completed
                    const prereqs = this.prerequisites[targetCourseId] || [];
                    const allPrereqsCompleted = prereqs.every(prereq => this.state.completedStatus[prereq]);

                    if (allPrereqsCompleted) {
                        this.state.unlockedStatus[targetCourseId] = true;

                        // Track newly unlocked courses by cycle for notifications
                        if (!newlyUnlockedByCycle[cycle]) {
                            newlyUnlockedByCycle[cycle] = [];
                        }
                        newlyUnlockedByCycle[cycle].push(targetCourseId);
                    }
                }
            }

            // Save if any courses were unlocked
            if (Object.keys(newlyUnlockedByCycle).length > 0) {
                this.saveState();

                // Show notifications for newly unlocked cycles
                for (const cycle in newlyUnlockedByCycle) {
                    // Only show notification if this is the first course unlocked in this cycle
                    const coursesInCycle = Array.from({
                        length: this.coursesPerCycle
                    }, (_, i) => `${cycle}-${i+1}`);
                    const previouslyUnlocked = coursesInCycle.some(id =>
                        id !== newlyUnlockedByCycle[cycle][0] && this.state.unlockedStatus[id]
                    );

                    if (!previouslyUnlocked) {
                        Toastify({
                            text: `¡Nuevos cursos del Ciclo ${cycle} desbloqueados!`,
                            duration: 3000,
                            gravity: "bottom",
                            position: "center",
                            className: "toastify"
                        }).showToast();
                    }
                }

                // Refresh the UI
                this.renderCurriculum();
            }

            this.updateCycleProgress();
            this.updateProgressIndicator();
        },

        // Set up event listeners
        setupEventListeners() {
            // Theme toggle
            const themeToggle = document.getElementById('theme-toggle');
            const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

            themeToggle.addEventListener('click', () => this.toggleTheme());
            mobileThemeToggle.addEventListener('click', () => this.toggleTheme());

            // Settings modal
            const settingsBtn = document.getElementById('settings-btn');
            const mobileSettingsBtn = document.getElementById('mobile-settings-btn');
            const closeSettings = document.getElementById('close-settings');
            const settingsModal = document.getElementById('settings-modal');

            settingsBtn.addEventListener('click', () => this.openSettingsModal());
            mobileSettingsBtn.addEventListener('click', () => this.openSettingsModal());
            closeSettings.addEventListener('click', () => {
                settingsModal.classList.add('hidden');
            });

            // Reset buttons
            document.getElementById('reset-course').addEventListener('click', () => this.openResetCourseModal());
            document.getElementById('reset-cycle').addEventListener('click', () => this.openResetCycleModal());
            document.getElementById('reset-all').addEventListener('click', () => this.confirmResetAll());

            // Reset course modal
            document.getElementById('cancel-reset-course').addEventListener('click', () => {
                document.getElementById('reset-course-modal').classList.add('hidden');
            });

            // Reset cycle modal
            document.getElementById('cancel-reset-cycle').addEventListener('click', () => {
                document.getElementById('reset-cycle-modal').classList.add('hidden');
            });

            // Confirmation modal
            document.getElementById('cancel-confirmation').addEventListener('click', () => {
                document.getElementById('confirmation-modal').classList.add('hidden');
            });
        },

        // Initialize theme based on user preference
        initTheme() {
            if (localStorage.getItem('dark-mode') === 'true' ||
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches &&
                    localStorage.getItem('dark-mode') === null)) {
                document.body.classList.add('dark-mode');
            }
        },

        // Toggle dark/light theme
        toggleTheme() {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode);
        },

        // Open settings modal
        openSettingsModal() {
            const courseEditor = document.getElementById('course-editor');
            courseEditor.innerHTML = '';

            // Create accordion for each cycle
            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                const cycleSection = document.createElement('div');
                cycleSection.classList.add('mb-4');

                const cycleHeader = document.createElement('div');
                cycleHeader.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'bg-gray-100', 'dark:bg-gray-800', 'rounded-md', 'cursor-pointer');
                cycleHeader.innerHTML = `
              <h4 class="font-medium">Ciclo ${cycle}</h4>
              <i class="fas fa-chevron-down"></i>
            `;

                const courseList = document.createElement('div');
                courseList.classList.add('pl-2', 'mt-2', 'space-y-2', 'hidden');

                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    const courseTitle = this.getCourseTitle(cycle, course);

                    const courseInput = document.createElement('div');
                    courseInput.classList.add('flex', 'items-center');
                    courseInput.innerHTML = `
                <input type="text" value="${courseTitle}" 
                  data-cycle="${cycle}" data-course="${course}" 
                  class="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Nombre del curso">
              `;

                    courseList.appendChild(courseInput);
                }

                cycleHeader.addEventListener('click', () => {
                    const isHidden = courseList.classList.toggle('hidden');
                    cycleHeader.querySelector('i').className = isHidden ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
                });

                cycleSection.appendChild(cycleHeader);
                cycleSection.appendChild(courseList);
                courseEditor.appendChild(cycleSection);
            }

            // Add save button
            const saveButton = document.createElement('button');
            saveButton.classList.add('mt-4', 'w-full', 'py-2', 'px-4', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'rounded-md');
            saveButton.textContent = 'Guardar cambios';

            saveButton.addEventListener('click', () => {
                const inputs = courseEditor.querySelectorAll('input');
                inputs.forEach(input => {
                    const cycle = parseInt(input.dataset.cycle);
                    const course = parseInt(input.dataset.course);

                    if (!this.state.courseNames[cycle]) {
                        this.state.courseNames[cycle] = {};
                    }

                    this.state.courseNames[cycle][course] = input.value;
                });

                this.saveState();
                this.renderCurriculum();
                document.getElementById('settings-modal').classList.add('hidden');
            });

            courseEditor.appendChild(saveButton);
            document.getElementById('settings-modal').classList.remove('hidden');
        },

        // Open reset course modal
        openResetCourseModal() {
            const resetOptions = document.getElementById('reset-course-options');
            resetOptions.innerHTML = '';

            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    if (this.state.completedStatus[courseId]) {
                        const courseTitle = this.getCourseTitle(cycle, course);

                        const option = document.createElement('div');
                        option.classList.add('p-2', 'hover:bg-gray-100', 'dark:hover:bg-gray-700', 'cursor-pointer', 'rounded-md');
                        option.textContent = `${courseTitle} (Ciclo ${cycle})`;

                        option.addEventListener('click', () => {
                            this.confirmResetCourse(courseId, courseTitle);
                        });

                        resetOptions.appendChild(option);
                    }
                }
            }

            if (resetOptions.children.length === 0) {
                resetOptions.innerHTML = '<p class="text-gray-500">No hay cursos completados para reiniciar.</p>';
            }

            document.getElementById('reset-course-modal').classList.remove('hidden');
            document.getElementById('settings-modal').classList.add('hidden');
        },

        // Open reset cycle modal
        openResetCycleModal() {
            const resetOptions = document.getElementById('reset-cycle-options');
            resetOptions.innerHTML = '';

            for (let cycle = 1; cycle <= this.cycles; cycle++) {
                // Check if any course in this cycle is completed
                let hasCourses = false;
                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    if (this.state.completedStatus[courseId]) {
                        hasCourses = true;
                        break;
                    }
                }

                if (hasCourses) {
                    const option = document.createElement('div');
                    option.classList.add('p-2', 'hover:bg-gray-100', 'dark:hover:bg-gray-700', 'cursor-pointer', 'rounded-md');
                    option.textContent = `Ciclo ${cycle}`;

                    option.addEventListener('click', () => {
                        this.confirmResetCycle(cycle);
                    });

                    resetOptions.appendChild(option);
                }
            }

            if (resetOptions.children.length === 0) {
                resetOptions.innerHTML = '<p class="text-gray-500">No hay ciclos con cursos completados para reiniciar.</p>';
            }

            document.getElementById('reset-cycle-modal').classList.remove('hidden');
            document.getElementById('settings-modal').classList.add('hidden');
        },

        // Confirm resetting a single course
        confirmResetCourse(courseId, courseTitle) {
            const confirmationModal = document.getElementById('confirmation-modal');
            const confirmationMessage = document.getElementById('confirmation-message');
            const confirmButton = document.getElementById('confirm-action');

            confirmationMessage.textContent = `¿Estás seguro que deseas reiniciar el curso "${courseTitle}"? Esta acción no se puede deshacer.`;

            confirmButton.onclick = () => {
                delete this.state.completedStatus[courseId];
                this.saveState();
                this.renderCurriculum();
                this.updateProgressIndicator();

                confirmationModal.classList.add('hidden');
            };

            document.getElementById('reset-course-modal').classList.add('hidden');
            confirmationModal.classList.remove('hidden');
        },

        // Confirm resetting an entire cycle
        confirmResetCycle(cycle) {
            const confirmationModal = document.getElementById('confirmation-modal');
            const confirmationMessage = document.getElementById('confirmation-message');
            const confirmButton = document.getElementById('confirm-action');

            confirmationMessage.textContent = `¿Estás seguro que deseas reiniciar todo el Ciclo ${cycle}? Esta acción no se puede deshacer.`;

            confirmButton.onclick = () => {
                // Reset completed status for all courses in this cycle
                for (let course = 1; course <= this.coursesPerCycle; course++) {
                    const courseId = `${cycle}-${course}`;
                    delete this.state.completedStatus[courseId];
                }

                // If this is not cycle 1, reset unlocked status as well
                if (cycle > 1) {
                    for (let course = 1; course <= this.coursesPerCycle; course++) {
                        const courseId = `${cycle}-${course}`;
                        delete this.state.unlockedStatus[courseId];
                    }
                }

                // Reset all subsequent cycles
                for (let nextCycle = cycle + 1; nextCycle <= this.cycles; nextCycle++) {
                    for (let course = 1; course <= this.coursesPerCycle; course++) {
                        const courseId = `${nextCycle}-${course}`;
                        delete this.state.completedStatus[courseId];
                        delete this.state.unlockedStatus[courseId];
                    }
                }

                this.saveState();
                this.renderCurriculum();
                this.updateProgressIndicator();

                confirmationModal.classList.add('hidden');
            };

            document.getElementById('reset-cycle-modal').classList.add('hidden');
            confirmationModal.classList.remove('hidden');
        },

        // Confirm resetting all progress
        confirmResetAll() {
            const confirmationModal = document.getElementById('confirmation-modal');
            const confirmationMessage = document.getElementById('confirmation-message');
            const confirmButton = document.getElementById('confirm-action');

            confirmationMessage.textContent = '¿Estás seguro que deseas reiniciar toda la malla curricular? Perderás todo tu progreso actual y esta acción no se puede deshacer.';

            confirmButton.onclick = () => {
                this.resetState();
                this.renderCurriculum();
                this.updateProgressIndicator();

                confirmationModal.classList.add('hidden');
                document.getElementById('settings-modal').classList.add('hidden');
            };

            confirmationModal.classList.remove('hidden');
        }
    };

    // Initialize the app
    app.init();
});