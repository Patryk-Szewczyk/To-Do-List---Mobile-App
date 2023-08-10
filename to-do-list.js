window.addEventListener('load', () => {
    const userPage_Width = $(window).width();
    console.log('Current window width: ' + userPage_Width);
    if (userPage_Width > 1059) {
        $('.todo-list').removeClass('todo-list-mobile').addClass('todo-list-desktop');
        let userWindow = document.querySelector('div.userPage-body');
        userWindow.style.height = window.innerHeight + 'px';
        // Set desktop todo content height:
        const todoAppBody = document.querySelector('div.todo-body');
        const todoAppBody_CSS_Obj = window.getComputedStyle(todoAppBody, null);
        let todoAppBody_CSS_Height = todoAppBody_CSS_Obj.getPropertyValue('height');
        let todoAppBody_CSS_Height_Val = String(todoAppBody_CSS_Height).slice(0, -2);

        const todoAppHeader = document.querySelector('div.todo-header-flex');
        const todoAppHeader_CSS_Obj = window.getComputedStyle(todoAppHeader, null);
        let todoAppHeader_CSS_Height = todoAppHeader_CSS_Obj.getPropertyValue('height');
        let todoAppHeader_CSS_Height_Val = String(todoAppHeader_CSS_Height).slice(0, -2);

        const todoAppMenu = document.querySelector('div.todo-menu');
        const todoAppMenu_CSS_Obj = window.getComputedStyle(todoAppMenu, null);
        let todoAppMenu_CSS_Height = todoAppMenu_CSS_Obj.getPropertyValue('height');
        let todoAppMenuks_CSS_Height_Val = String(todoAppMenu_CSS_Height).slice(0, -2);

        const todoAppList = document.querySelector('div.todo-list-desktop');
        let todoAppList_Height_Val = todoAppBody_CSS_Height_Val - todoAppHeader_CSS_Height_Val - todoAppMenuks_CSS_Height_Val;
        console.log('todoAppBody: ' + todoAppBody_CSS_Height_Val + "," + 'todoAppHeader: ' + todoAppHeader_CSS_Height_Val + ", " + 'todoAppMenu: ' + todoAppMenuks_CSS_Height_Val + ', ' + 'todoAppList: ' + todoAppList_Height_Val);
        todoAppList.style.height = todoAppList_Height_Val + 'px';
        
        let todoAppList_Height = 0;
    } else if (userPage_Width <= 1059) {
        $('.todo-list').removeClass('todo-list-desktop').addClass('todo-list-mobile');
        if (document.querySelector('div.todo-list-mobile')) {
            const mobile_TodoList = document.querySelector('div.todo-list-mobile');

            const mobile_Baner = document.querySelector('div.todo-header-flex');
            const mobile_Baner_CSS_Obj = window.getComputedStyle(mobile_Baner, null);
            let mobile_Baner_CSS_Height = mobile_Baner_CSS_Obj.getPropertyValue('height');
            let mobile_Baner_Proper_Height_Val = String(mobile_Baner_CSS_Height).slice(0, -2);
            //console.log('Mobile \'todo header\' element height: ' + mobile_Baner_Proper_Height_Val);
            
            const mobile_Menu = document.querySelector('div.todo-menu');
            const mobile_Menu_CSS_Obj = window.getComputedStyle(mobile_Menu, null);
            let mobile_Menu_CSS_Height = mobile_Menu_CSS_Obj.getPropertyValue('height');
            let mobile_Menu_Proper_Height_Val = String(mobile_Menu_CSS_Height).slice(0, -2);
            //console.log('Mobile \'todo menu\' element height: ' + mobile_Menu_Proper_Height_Val);
            
            let mobile_TodoList_Height_Value = window.innerHeight - Number(mobile_Baner_Proper_Height_Val) - Number(mobile_Menu_Proper_Height_Val);
            //console.log('Mobile \'todo list\' element height: ' + mobile_TodoList_Height_Value);
            
            //mobile_TodoList.style.height = mobile_TodoList_Height_Value + 'px';
        } else {}
    }
}, false);
window.addEventListener('resize', () => {
    const userPage_Width = $(window).width();
    console.clear();
    console.log('Current window width: ' + userPage_Width);
    if (userPage_Width > 1059) {
        $('.todo-list').removeClass('todo-list-mobile').addClass('todo-list-desktop');
        let userWindow = document.querySelector('div.userPage-body');
        userWindow.style.height = window.innerHeight + 'px';

        
    } else if (userPage_Width <= 1059) {
        $('.todo-list').removeClass('todo-list-desktop').addClass('todo-list-mobile');
        const userWindow = document.querySelector('div.userPage-body');
        userWindow.style.height = 'auto';
        // Set desktop todo content height:
        const todoAppBody = document.querySelector('div.todo-body');
        const todoAppBody_CSS_Obj = window.getComputedStyle(todoAppBody, null);
        let todoAppBody_CSS_Height = todoAppBody_CSS_Obj.getPropertyValue('height');
        let todoAppBody_CSS_Height_Val = String(todoAppBody_CSS_Height).slice(0, -2);

        const todoAppHeader = document.querySelector('div.todo-header-flex');
        const todoAppHeader_CSS_Obj = window.getComputedStyle(todoAppHeader, null);
        let todoAppHeader_CSS_Height = todoAppHeader_CSS_Obj.getPropertyValue('height');
        let todoAppHeader_CSS_Height_Val = String(todoAppHeader_CSS_Height).slice(0, -2);

        const todoAppMenu = document.querySelector('div.todo-menu');
        const todoAppMenu_CSS_Obj = window.getComputedStyle(todoAppMenu, null);
        let todoAppMenu_CSS_Height = todoAppMenu_CSS_Obj.getPropertyValue('height');
        let todoAppMenuks_CSS_Height_Val = String(todoAppMenu_CSS_Height).slice(0, -2);

        const todoAppList = document.querySelector('div.todo-list-desktop');
        let todoAppList_Height_Val = todoAppBody_CSS_Height_Val - todoAppHeader_CSS_Height_Val - todoAppMenuks_CSS_Height_Val;
        console.log('todoAppBody: ' + todoAppBody_CSS_Height_Val + "," + 'todoAppHeader: ' + todoAppHeader_CSS_Height_Val + ", " + 'todoAppMenu: ' + todoAppMenuks_CSS_Height_Val + ', ' + 'todoAppList: ' + todoAppList_Height_Val);
        todoAppList.style.height = todoAppList_Height_Val + 'px';
        if (document.querySelector('div.todo-list-mobile')) {
            const mobile_TodoList = document.querySelector('div.todo-list-mobile');

            const mobile_Baner = document.querySelector('div.todo-header-flex');
            const mobile_Baner_CSS_Obj = window.getComputedStyle(mobile_Baner, null);
            let mobile_Baner_CSS_Height = mobile_Baner_CSS_Obj.getPropertyValue('height');
            let mobile_Baner_Proper_Height_Val = String(mobile_Baner_CSS_Height).slice(0, -2);
            
            const mobile_Menu = document.querySelector('div.todo-menu');
            const mobile_Menu_CSS_Obj = window.getComputedStyle(mobile_Menu, null);
            let mobile_Menu_CSS_Height = mobile_Menu_CSS_Obj.getPropertyValue('height');
            let mobile_Menu_Proper_Height_Val = String(mobile_Menu_CSS_Height).slice(0, -2);
            
            let mobile_TodoList_Height_Value = window.innerHeight - Number(mobile_Baner_Proper_Height_Val) - Number(mobile_Menu_Proper_Height_Val);
            
            //mobile_TodoList.style.height = mobile_TodoList_Height_Value + 'px';
        } else {}
    }
}, false);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  T O D O   Q U E S T   F A C T O R Y
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Tworzenie obiektów-questów:
let todo_Quest_Factory = {
    inputTitleEL: document.querySelector('input.input-text'),
    inputButtonEl: document.querySelector('div.input-button'),
    inputButtonArrowEl: document.querySelector('div.input-button-arrow'),
    inputDescriptionEl: document.getElementsByClassName('input-textarea')[0],
    guideText: document.querySelector('div.guideInfo-text'),
    currentTitle_Val: '',
    currentDescription_Val: '',
    inputButton_Step: 1,
    todoQuest_Array: [],
    setAEL_InputButtonEl: function() {
        if ($(window).width() > 1059) {
            this.inputButtonEl.addEventListener('click', () => {   // CLICK | Desktop
                if (this.inputButton_Step == 1) {   // Zatwierdź: Tytuł
                    //console.log('Input switch: ' + this.inputButton_Step);
                    this.inputButton_Step = 2;
                    this.guideText.textContent = 'write description:';
                    this.inputTitleEL.style.display = 'none';
                    this.inputDescriptionEl.style.display = 'block';
                    this.currentTitle_Val = this.inputTitleEL.value;
                    console.log('Current title: '+ this.currentTitle_Val);
                    this.inputTitleEL.value = '';
                } else if (this.inputButton_Step == 2) {   // Zatwierdź: Opis
                    //console.log('Input switch: ' + this.inputButton_Step);
                    this.inputButton_Step = 1;
                    this.guideText.textContent = 'write title:';
                    this.inputTitleEL.style.display = 'block';
                    this.inputDescriptionEl.style.display = 'none';
                    this.currentDescription_Val = this.inputDescriptionEl.value;
                    console.log('Current description: '+ this.currentDescription_Val);
                    buildTodoQuest_InfoArray(this.currentTitle_Val, this.currentDescription_Val);
                    this.inputDescriptionEl.value = '';
                }
            }, false);
        } else if ($(window).width() <= 1059) {
            this.inputButtonEl.addEventListener('touchstart', () => {   // TOUCHSTART | Mobile
                if (this.inputButton_Step == 1) {   // Zatwierdź: Tytuł
                    //console.log('Input switch: ' + this.inputButton_Step);
                    this.inputButton_Step = 2;
                    this.guideText.textContent = 'write description:';
                    this.inputTitleEL.style.display = 'none';
                    this.inputDescriptionEl.style.display = 'block';
                    this.currentTitle_Val = this.inputTitleEL.value;
                    console.log('Current title: '+ this.currentTitle_Val);
                    this.inputTitleEL.value = '';
                } else if (this.inputButton_Step == 2) {   // Zatwierdź: Opis
                    //console.log('Input switch: ' + this.inputButton_Step);
                    this.inputButton_Step = 1;
                    this.guideText.textContent = 'write title:';
                    this.inputTitleEL.style.display = 'block';
                    this.inputDescriptionEl.style.display = 'none';
                    this.currentDescription_Val = this.inputDescriptionEl.value;
                    console.log('Current description: '+ this.currentDescription_Val);
                    buildTodoQuest_InfoArray(this.currentTitle_Val, this.currentDescription_Val);
                    this.inputDescriptionEl.value = '';
                }
            }, false);
        }
    },
    setAEL_InputsTextEL: function() {
        this.inputTitleEL.addEventListener('keypress', (e) => {   // ENTER KEY
            keyName = e.key;
            if (String(keyName) === 'Enter') {
                if (this.inputButton_Step == 1) {
                    this.inputButton_Step = 2;
                    this.guideText.textContent = 'write description:';
                    this.inputTitleEL.style.display = 'none';
                    this.inputDescriptionEl.style.display = 'block';
                    this.currentTitle_Val = this.inputTitleEL.value;
                    console.log('Current title: '+ this.currentTitle_Val);
                    this.inputTitleEL.value = '';
                    this.inputDescriptionEl.select();
                } else {}
            } else {}
            console.log('Key name: ' + keyName);
        }, false);
        this.inputDescriptionEl.addEventListener('keypress', (e) => {   // ENTER KEY
            keyName = e.key;
            if (String(keyName) === 'Enter') {
                if (this.inputButton_Step == 2) {
                    this.inputButton_Step = 1;
                    this.guideText.textContent = 'write title:';
                    this.inputTitleEL.style.display = 'block';
                    this.inputDescriptionEl.style.display = 'none';
                    this.currentDescription_Val = this.inputDescriptionEl.value;
                    console.log('Current description: '+ this.currentDescription_Val);
                    buildTodoQuest_InfoArray(this.currentTitle_Val, this.currentDescription_Val);
                    this.inputDescriptionEl.value = '';
                    this.inputTitleEL.select();
                } else {}
            } else {}
            console.log('Key name: ' + keyName);
        }, false);
    }
};
todo_Quest_Factory.setAEL_InputButtonEl();
todo_Quest_Factory.setAEL_InputsTextEL();

function buildTodoQuest_InfoArray(curTit, curDes) {
    let tdQ_El_todoListQuestBody = document.createElement('div');
    let tdQ_El_questBaner = document.createElement('div');
    let tdQ_El_questArrowBox = document.createElement('div');
    let tdQ_El_questArrowBoxProper = document.createElement('div');
    let tdQ_El_questNumber = document.createElement('div');
    let tdQ_El_questRemoveBox = document.createElement('div');
    let tdQ_El_questRemoveProper = document.createElement('div');
    let tdQ_El_glyphiconRemove = document.createElement('div');
    let tdQ_El_questTitle = document.createElement('div');
    let tdQ_TN_questTitle = document.createTextNode(curTit);
    let tdQ_El_questDescription = document.createElement('div');
    let tdQ_TN_questDescription = document.createTextNode(curDes);

    tdQ_El_todoListQuestBody.setAttribute('class', 'todo-list-quest-body');
    tdQ_El_questBaner.setAttribute('class', 'quest-baner');
    tdQ_El_questArrowBox.setAttribute('class', 'quest-arrow-box');
    tdQ_El_questArrowBoxProper.setAttribute('id', '');
    tdQ_El_questArrowBoxProper.setAttribute('class', 'quest-arrow-proper');
    tdQ_El_questNumber.setAttribute('class', 'quest-number');
    tdQ_El_questRemoveBox.setAttribute('class', 'quest-remove-box');
    tdQ_El_questRemoveProper.setAttribute('class', 'quest-remove-proper');
    tdQ_El_glyphiconRemove.setAttribute('id', '');
    tdQ_El_glyphiconRemove.setAttribute('class', 'glyphicon glyphicon-remove');
    tdQ_El_questTitle.setAttribute('class', 'quest-title');
    tdQ_El_questDescription.setAttribute('class', 'quest-description');
    
    tdQ_El_questArrowBox.appendChild(tdQ_El_questArrowBoxProper);
    tdQ_El_questBaner.appendChild(tdQ_El_questArrowBox);
    tdQ_El_questBaner.appendChild(tdQ_El_questNumber);
    tdQ_El_questRemoveProper.appendChild(tdQ_El_glyphiconRemove)
    tdQ_El_questRemoveBox.appendChild(tdQ_El_questRemoveProper);
    tdQ_El_questBaner.appendChild(tdQ_El_questRemoveBox);
    tdQ_El_todoListQuestBody.appendChild(tdQ_El_questBaner);
    tdQ_El_questTitle.appendChild(tdQ_TN_questTitle);
    tdQ_El_todoListQuestBody.appendChild(tdQ_El_questTitle);
    tdQ_El_questDescription.appendChild(tdQ_TN_questDescription);
    tdQ_El_todoListQuestBody.appendChild(tdQ_El_questDescription);

    document.querySelector('div.todo-list').appendChild(tdQ_El_todoListQuestBody);

    $(tdQ_El_questArrowBoxProper).parent().parent().next().next().fadeOut({queue: false});
    $(tdQ_El_questArrowBoxProper).parent().parent().next().next().slideToggle({queue: false});
    
    upgradeTodoQuestArray(curTit, curDes, tdQ_El_questArrowBoxProper, tdQ_El_glyphiconRemove);
};

function upgradeTodoQuestArray(curTit, curDes, tdQ_El_questArrowBoxProper, tdQ_El_glyphiconRemove) {
    //console.log(tdQ_index);
    todo_Quest_Factory.todoQuest_Array.push({
        tdQ_Title: curTit, 
        tdQ_Description: curDes,  
        direction: 'top',
        AEL_Remove: tdQ_El_glyphiconRemove,
        AEL_Arrow: tdQ_El_questArrowBoxProper
    });
    setTodoQuestNumbers();
    setAEL_Remove_Func(tdQ_El_glyphiconRemove);
    setAEL_Arrow_Func(tdQ_El_questArrowBoxProper);
    setID_Arrow_and_Remove_Func();   // UWAGA MEGA WAŻNE: Aktualizację ID tzreba przeprowadzić dopiero PO modyfikacji tablicy.
    upgradeLocalStorage();   // UWAGA: Ta funkcja musi być kiedy tworzysz nowy element oraz kiedy go usuwasz, aby te zmiany pojawiały się na bieżąco w localstorage.
    //console.log('ToDo quests amount: ' + todo_Quest_Factory.todoQuest_Array.length);
    console.log(todo_Quest_Factory.todoQuest_Array);
};

function setTodoQuestNumbers() {
    for (i = 0; i < document.getElementsByClassName('todo-list-quest-body').length; i++) {
        document.getElementsByClassName('quest-number').item(i).textContent = 'todo #' + (i + 1);
    };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//  I D   B U T T O N S   R E S E T
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function setID_Arrow_and_Remove_Func() {
    for (i = 0; i < document.getElementsByClassName('todo-list-quest-body').length; i++) {
        todo_Quest_Factory.todoQuest_Array[i].AEL_Remove.removeAttribute('id');
        todo_Quest_Factory.todoQuest_Array[i].AEL_Arrow.removeAttribute('id');
    };
    for (i = 0; i < document.getElementsByClassName('todo-list-quest-body').length; i++) {
        todo_Quest_Factory.todoQuest_Array[i].AEL_Remove.setAttribute('id', i);
        todo_Quest_Factory.todoQuest_Array[i].AEL_Arrow.setAttribute('id', i);
    };
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//  Q U E S T   R E M O V E
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function setAEL_Remove_Func(tdQ_El_glyphiconRemove) {
    if ($(window).width() > 1059) {
        tdQ_El_glyphiconRemove.addEventListener('click', (e) => {
            removeTodoQuest(e);
        }, false);
    } else if ($(window).width() <= 1059) {
        tdQ_El_glyphiconRemove.addEventListener('touchend', (e) => {
            removeTodoQuest(e);
        }, false);
    }
};
function removeTodoQuest(e) {
    let removeTarget = e.target;
    let removeIndex = removeTarget.id;
    console.log('Kliknięty element: ' + removeIndex);
    $(this[removeIndex]).parent().parent().parent().fadeOut({duration: 300, queue: false});
    $(this[removeIndex]).parent().parent().parent().slideToggle({duration: 300, queue: false});
    setTimeout(() => {
        $(this[removeIndex]).parent().parent().parent().remove();
        setTodoQuestNumbers();
        console.log('Remove index: ' + removeIndex);
        todo_Quest_Factory.todoQuest_Array.splice(removeIndex, 1);   
        // MEGA WAŻNE: Jeżeli wartość ID ustalam resetując poprednią wartość, ustwaijąc ją na nową za pośrednictwem pętli, 
        // to odwołując się do ID przez e.target - > (potem .id) w splice, TO NIE DAJĘ metody indexOf(). A Dlaczego, to  
        // nie mam pojęcia, chodziaż wynik powinien być moim zdaniem ten sam (to nie jest...).
        removeNullIndex();
    }, 300);
};
function removeNullIndex() {
    // Ta funkcja powoduje utworzenie nowej pustej tablicy, skopiowania do niej danych ze starej, usunięcie danych ze starej tablicy, 
    // w tym likwidację jej indeksów. Następnie włożenie do pustej starej tablicy indeksów (z wartościami) z nowej tablicy, które
    // istnieję, tzn. - nie są puste (!= null).
    let new_Array = [];
    for (i = 0; i < todo_Quest_Factory.todoQuest_Array.length; i++) {
        new_Array[i] = todo_Quest_Factory.todoQuest_Array[i];
    };
    console.log('New array: ');
    console.log(new_Array);
    let new_Array_Length = new_Array.length;
    //console.log('New array length:' + new_Array_Length);
    for (i = 0; i < new_Array_Length; i++) {
        todo_Quest_Factory.todoQuest_Array.pop();
    };
    console.log('Todo array:');
    console.log(todo_Quest_Factory.todoQuest_Array);
    for (i = 0; i < new_Array.length; i++) {
        if (new_Array[i] != null && new_Array != undefined) {
            todo_Quest_Factory.todoQuest_Array[i] = new_Array[i];
        } else if (new_Array[i] == null && new_Array == undefined) {}
    };
    console.log('Upgraged todo array:')
    console.log(todo_Quest_Factory.todoQuest_Array);
    // Resetowanie ID do kasowania i strzałki:
    setID_Arrow_and_Remove_Func();   // MEGA ULTRA HIPER GIGA ALFA GAMMA OMEGA WAŻNA RZECZ: Reset ID od przysisków, zapewnia ochronę przed uruchomieniem 'nie tej co trzeba' funkcji.
    upgradeLocalStorage();
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//  D E S C R I P T I O N   H I D E   &   S H O W
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function setAEL_Arrow_Func(tdQ_El_questArrowBoxProper) {
    if ($(window).width() > 1059) {
        tdQ_El_questArrowBoxProper.addEventListener('click', (e) => {
            toggleTodoQuest(e);
        }, false);
    } else if ($(window).width() <= 1059) {
        tdQ_El_questArrowBoxProper.addEventListener('touchend', (e) => {
            toggleTodoQuest(e);
        }, false);
    }
};
function toggleTodoQuest(e) {
    let arrowEl = e.target;
    let arrowIndex = arrowEl.id;
    console.log('Toggle element: ' + arrowIndex);
    if (todo_Quest_Factory.todoQuest_Array[arrowIndex].direction == 'top') {
        rotateArrow_Down(e);
        todo_Quest_Factory.todoQuest_Array[arrowIndex].direction = 'bottom';
    } else if (todo_Quest_Factory.todoQuest_Array[arrowIndex].direction == 'bottom') {
        rotateArrow_Top(e);
        todo_Quest_Factory.todoQuest_Array[arrowIndex].direction = 'top';}
}
function rotateArrow_Down(e) {
    let arrowEl = e.target;
    arrowEl.style.transform = 'rotate(' + 180 + 'deg)';
    arrowEl.style.transitionDuration = 0.35 + 's';
    let arrowIndex = arrowEl.id;
    //console.log('Nowy:' + arrowIndex);
    $(this[arrowIndex]).parent().parent().next().next().fadeOut({duration: 700, queue: false});
    $(this[arrowIndex]).parent().parent().next().next().slideToggle({duration: 700, queue: false});
};
function rotateArrow_Top(e) {
    let arrowEl = e.target;
    arrowEl.style.transform = 'rotate(' + 0 + 'deg)';
    arrowEl.style.transitionDuration = 0.35 + 's';
    let arrowIndex = arrowEl.id;
    //console.log('Nowy:' + arrowIndex);
    $(this[arrowIndex]).parent().parent().next().next().fadeOut({duration: 700, queue: false});
    $(this[arrowIndex]).parent().parent().next().next().slideToggle({duration: 700, queue: false});
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//  L O C A L S T O R A G E
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

function upgradeLocalStorage() {
    window.localStorage.clear();
    const todo_Array = todo_Quest_Factory.todoQuest_Array;
    const localStorage_Todo_Array = JSON.stringify(todo_Array);   // Przekształcanie tablicy w ciąg zanków, aby można było zapisać ją w localStorage.
    window.localStorage.setItem('todo_Array', localStorage_Todo_Array);
}

window.addEventListener('load', () => {
    const localStorage_GET_Todo_Array = window.localStorage.getItem('todo_Array');
    const todo_Array_Result = JSON.parse(localStorage_GET_Todo_Array);   // Przekształcanie danych tekstowych zapisanych w formacjie JSON w tablicę.
    if (todo_Array_Result != null || todo_Array_Result != undefined) {
        console.log('Downloaded LocalStorage Todo elements amount: ' + todo_Array_Result.length);
        for (i = 0; i < todo_Array_Result.length; i++) {
            todo_Quest_Factory.todoQuest_Array[i] = todo_Array_Result[i];
            afterLS_BuildTodoQuests(i);
        };
        setTodoQuestNumbers();
        setID_Arrow_and_Remove_Func();   // Dlaczego to jest tutaj? A dlatego gdyż, TO ma resetować ID kiedy zadania ZOSTANĄ utworzone, 
        // a nie po utworzeniu każdego po kolei zadania (- wtedy kiedy ta referencja byłaby w pętli FOR).
        // Dlaczego te funkcje od Eventów są na dole w Builde'rze (są w zakresie pętli FOR!), a nie, przed restarterem-ustawiaczem ID? A dlatego, 
        // gdyż ów funkcje Eventowe przekazują indeks kolejnego nowo utworzonego elementu-zadania, do którego osobno jest przyczepiane zdarzenie.
        // Gdyby ta funkcja była poza pętlą FOR, wykonałaby się tylko raz, czyli 1 element miałby tylko słuchacze zdarzeń, zresztą wyskoczyłby
        // błąd, gdyż brakowałoby argumentu do przekazania - tutaj aktualnego indeksu z pętli FOR.
        console.log(todo_Quest_Factory.todoQuest_Array);
    } else {}
}, false);

function afterLS_BuildTodoQuests(i) {   // Musiałem to zrobić, z powodu funkcji 'upgradeTodoQuestArray' znajdującej się w funkcji tworzącej todo element oraz zmiennych tytuły i opisu, zresztą zobacz, a zrozumiesz w czym tkwi problem.
    let tdQ_El_todoListQuestBody = document.createElement('div');
    let tdQ_El_questBaner = document.createElement('div');
    let tdQ_El_questArrowBox = document.createElement('div');
    let tdQ_El_questArrowBoxProper = document.createElement('div');
    let tdQ_El_questNumber = document.createElement('div');
    let tdQ_El_questRemoveBox = document.createElement('div');
    let tdQ_El_questRemoveProper = document.createElement('div');
    let tdQ_El_glyphiconRemove = document.createElement('div');
    let tdQ_El_questTitle = document.createElement('div');
    let tdQ_TN_questTitle = document.createTextNode(todo_Quest_Factory.todoQuest_Array[i].tdQ_Title);
    let tdQ_El_questDescription = document.createElement('div');
    let tdQ_TN_questDescription = document.createTextNode(todo_Quest_Factory.todoQuest_Array[i].tdQ_Description);

    tdQ_El_todoListQuestBody.setAttribute('class', 'todo-list-quest-body');
    tdQ_El_questBaner.setAttribute('class', 'quest-baner');
    tdQ_El_questArrowBox.setAttribute('class', 'quest-arrow-box');
    tdQ_El_questArrowBoxProper.setAttribute('id', '');
    tdQ_El_questArrowBoxProper.setAttribute('class', 'quest-arrow-proper');
    tdQ_El_questNumber.setAttribute('class', 'quest-number');
    tdQ_El_questRemoveBox.setAttribute('class', 'quest-remove-box');
    tdQ_El_questRemoveProper.setAttribute('class', 'quest-remove-proper');
    tdQ_El_glyphiconRemove.setAttribute('id', '');
    tdQ_El_glyphiconRemove.setAttribute('class', 'glyphicon glyphicon-remove');
    tdQ_El_questTitle.setAttribute('class', 'quest-title');
    tdQ_El_questDescription.setAttribute('class', 'quest-description');
    
    tdQ_El_questArrowBox.appendChild(tdQ_El_questArrowBoxProper);
    tdQ_El_questBaner.appendChild(tdQ_El_questArrowBox);
    tdQ_El_questBaner.appendChild(tdQ_El_questNumber);
    tdQ_El_questRemoveProper.appendChild(tdQ_El_glyphiconRemove)
    tdQ_El_questRemoveBox.appendChild(tdQ_El_questRemoveProper);
    tdQ_El_questBaner.appendChild(tdQ_El_questRemoveBox);
    tdQ_El_todoListQuestBody.appendChild(tdQ_El_questBaner);
    tdQ_El_questTitle.appendChild(tdQ_TN_questTitle);
    tdQ_El_todoListQuestBody.appendChild(tdQ_El_questTitle);
    tdQ_El_questDescription.appendChild(tdQ_TN_questDescription);
    tdQ_El_todoListQuestBody.appendChild(tdQ_El_questDescription);

    document.querySelector('div.todo-list').appendChild(tdQ_El_todoListQuestBody);

    $(tdQ_El_questArrowBoxProper).parent().parent().next().next().fadeOut({queue: false});
    $(tdQ_El_questArrowBoxProper).parent().parent().next().next().slideToggle({queue: false});

    setTargetToEventElements(i, tdQ_El_questArrowBoxProper, tdQ_El_glyphiconRemove);
    setAfterLS_AEL_Remove_Func(i);
    setAfterLS_AEL_Arrow_Func(i);
};

function setTargetToEventElements(i, tdQ_El_questArrowBoxProper, tdQ_El_glyphiconRemove) {
    todo_Quest_Factory.todoQuest_Array[i].AEL_Remove = tdQ_El_glyphiconRemove;
    todo_Quest_Factory.todoQuest_Array[i].AEL_Arrow = tdQ_El_questArrowBoxProper;
}

function setAfterLS_AEL_Remove_Func(i) {
    if ($(window).width() > 1059) {
        todo_Quest_Factory.todoQuest_Array[i].AEL_Remove.addEventListener('click', (e) => {
            removeTodoQuest(e);
        }, false);
    } else if ($(window).width() <= 1059) {
        todo_Quest_Factory.todoQuest_Array[i].AEL_Remove.addEventListener('touchend', (e) => {
            removeTodoQuest(e);
        }, false);
    }
};

function setAfterLS_AEL_Arrow_Func(i) {
    if ($(window).width() > 1059) {
        todo_Quest_Factory.todoQuest_Array[i].AEL_Arrow.addEventListener('click', (e) => {
            toggleTodoQuest(e);
        }, false);
    } else if ($(window).width() <= 1059) {
        todo_Quest_Factory.todoQuest_Array[i].AEL_Arrow.addEventListener('touchend', (e) => {
            toggleTodoQuest(e);
        }, false);
    }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//  W E B S I T E   R E S T A R T E R   (To protect correct AEL work)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

window.addEventListener('resize', () => {   // Kiedy zmieniemy wielkość okna słuchacze zdarzeń nie diząłją prawidłowo, 
    // a nie mogę ich usuwać z obiektem zdarzeń (e), w celu zamiany zdarzenia w zależności od dostosowania do wielkości ekranu (desktop/mobile).
    //if ($(window).width() > 1059) {   // Kiedy osiągniemy: Desktop Web Design - odświerzaj stronę za każdą zmianę wielkości okna
        location.reload();
    //} else if ($(window).width() <= 1059) {}   // Kiedy osiągniemy: Mobile Web Design - nie odświerzaj strony
}, false);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//  N A V B A R   F I X E D
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

const todo_Menu_Obj = {
    // Przypisanie elementu do właściwości obiektu:
    todoMenu: '',
    setTodoMenuEl: () => {   // Tak wlaśnie dopiero można przypisać element do właściwości w obiekcie.
        return this.todoMenu = document.querySelector('div.todo-menu');
    },
    todoMenu_Imitate: '',
    setTodoMenu_ImitateEl: () => {
        return this.todoMenu_Imitate = document.querySelector('div.todo-menu-imitateToMobile');
    },
    currentUserHeight: 0,
    checkCurrentUserHeight: () => {
        this.currentUserHeight = window.pageYOffset;
        //console.log('Odległosć od góry: ' + currentUserHeight);
        if (currentUserHeight >= 65) {
            //alert(this.todoMenu);
            this.todoMenu.style.position = 'fixed';
            this.todoMenu.style.top = 0 + 'px';
            this.todoMenu_Imitate.style.display = 'grid';
        } else if (currentUserHeight < 65) {
            this.todoMenu.style.position = 'relative';
            this.todoMenu.style.top = 0 + 'px';
            this.todoMenu_Imitate.style.display = 'none';
        }
    }
};
todo_Menu_Obj.setTodoMenu_ImitateEl();
todo_Menu_Obj.setTodoMenuEl();
window.addEventListener('scroll', todo_Menu_Obj.checkCurrentUserHeight, false);
