// TODO 데이터를 로컬 스토리지에서 가져오기
function getTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

// TODO 데이터를 로컬 스토리지에 저장하기
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 시간 형식 변환 (Instagram style)
function formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // 초 단위

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
    return date.toLocaleDateString();
}

// TODO 아이템 생성하기 (Instagram Post Style)
function createTodoElement(todo, index) {
    const postDiv = document.createElement('div');
    postDiv.className = 'todo-post';
    postDiv.dataset.index = index;

    // Initialize liked state if not exists
    if (todo.liked === undefined) {
        todo.liked = false;
    }

    postDiv.innerHTML = `
        <div class="todo-post-header">
            <div class="user-info">
                <div class="user-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="user-details">
                    <span class="username">My Task</span>
                    <span class="post-time">${formatTime(todo.createdAt)}</span>
                </div>
            </div>
            <div class="todo-post-actions">
                <button class="delete-todo-btn" data-index="${index}">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
            </div>
        </div>

        <div class="todo-post-content">
            <div class="todo-post-title">${todo.title}</div>
            <div class="todo-post-detail">${todo.detail}</div>
            <div class="todo-post-time">${formatTime(todo.createdAt)}</div>
        </div>

        <div class="todo-post-footer">
            <div class="post-interaction">
                <button class="like-btn ${todo.liked ? 'liked' : ''}" data-index="${index}">
                    <i class="${todo.liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <button class="comment-btn">
                    <i class="fa-regular fa-comment"></i>
                </button>
                <button class="share-btn-icon">
                    <i class="fa-regular fa-paper-plane"></i>
                </button>
            </div>
            <button class="bookmark-btn">
                <i class="fa-regular fa-bookmark"></i>
            </button>
        </div>
    `;

    // Delete button event
    const deleteBtn = postDiv.querySelector('.delete-todo-btn');
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        if (confirm('Delete this task?')) {
            deleteTodo(index);
        }
    };

    // Like button event
    const likeBtn = postDiv.querySelector('.like-btn');
    likeBtn.onclick = (e) => {
        e.stopPropagation();
        toggleLike(index);
        likeBtn.classList.add('like-animation');
        setTimeout(() => {
            likeBtn.classList.remove('like-animation');
        }, 300);
    };

    return postDiv;
}

// Toggle like status
function toggleLike(index) {
    const todos = getTodos();
    todos[index].liked = !todos[index].liked;
    saveTodos(todos);
    renderTodos();
}

// TODO 목록 렌더링
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    const todos = getTodos();

    todoList.innerHTML = '';

    if (todos.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <div class="empty-state-icon">
                <i class="fa-regular fa-square-plus"></i>
            </div>
            <div class="empty-state-text">No posts yet</div>
            <div class="empty-state-text">Start sharing your tasks!</div>
        `;
        todoList.appendChild(emptyState);
        return;
    }

    // Reverse to show newest first (like Instagram)
    todos.reverse().forEach((todo, index) => {
        const actualIndex = todos.length - 1 - index; // Adjust index for reversed array
        const todoElement = createTodoElement(todo, actualIndex);
        todoList.appendChild(todoElement);
    });
}

// TODO 추가하기
function addTodo() {
    const titleInput = document.getElementById('todo-title');
    const detailInput = document.getElementById('todo-detail');

    const title = titleInput.value.trim();
    const detail = detailInput.value.trim();

    if (!title) {
        showMessage('Please add a title for your task');
        titleInput.focus();
        return;
    }

    const todos = getTodos();
    const newTodo = {
        title: title,
        detail: detail || 'No description',
        createdAt: new Date().toISOString(),
        liked: false
    };

    todos.push(newTodo);
    saveTodos(todos);

    titleInput.value = '';
    detailInput.value = '';

    renderTodos();
    showMessage('Task shared successfully!');
}

// TODO 삭제하기
function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
    showMessage('Task deleted');
}

// Show success message
function showMessage(message) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message show';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Filter todos
function filterTodos(filter) {
    const todos = getTodos();
    const now = new Date();
    let filteredTodos = [];

    switch(filter) {
        case 'today':
            filteredTodos = todos.filter(todo => {
                const todoDate = new Date(todo.createdAt);
                return todoDate.toDateString() === now.toDateString();
            });
            break;
        case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            filteredTodos = todos.filter(todo => {
                const todoDate = new Date(todo.createdAt);
                return todoDate >= weekAgo;
            });
            break;
        default:
            filteredTodos = todos;
    }

    return filteredTodos;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();

    // 저장 버튼 클릭 이벤트
    document.getElementById('save-btn').addEventListener('click', addTodo);

    // Enter 키로 저장하기 (제목 입력창)
    document.getElementById('todo-title').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('todo-detail').focus();
        }
    });

    // Ctrl+Enter로 저장하기 (상세내용 입력창)
    document.getElementById('todo-detail').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            addTodo();
        }
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Apply filter
            const filterText = btn.textContent.toLowerCase();
            if (filterText === 'today') {
                // Filter for today's todos
            } else if (filterText === 'this week') {
                // Filter for this week's todos
            } else {
                // Show all todos
                renderTodos();
            }
        });
    });

    // Story items click events
    const storyItems = document.querySelectorAll('.story-item');
    storyItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            storyItems.forEach(s => s.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');

            // If "New Task" is clicked, focus on input
            if (item.querySelector('.fa-plus')) {
                document.getElementById('todo-title').focus();
            }
        });
    });
});