# Test Cases - Kanban Task Board

## TC01 - Display Board Columns
**Steps:**
1. Open the application.
2. Check the board layout.

**Expected Result:**
The board displays three columns: To Do, In Progress, and Done.

**Status:** Passed

---

## TC02 - Create New Task
**Steps:**
1. Click the "+ New Task" button.
2. Enter a task title and description.
3. Save the task.

**Expected Result:**
The new task appears in the To Do column.

**Status:** Passed

---

## TC03 - Edit Task
**Steps:**
1. Click an existing task.
2. Update the task title or description.
3. Save changes.

**Expected Result:**
The task is updated successfully.

**Status:** Passed

---

## TC04 - Delete Task
**Steps:**
1. Open an existing task.
2. Click delete.
3. Confirm deletion if prompted.

**Expected Result:**
The task is removed from the board.

**Status:** Passed

---

## TC05 - Drag and Drop Task
**Steps:**
1. Drag a task from To Do.
2. Drop it into In Progress or Done.

**Expected Result:**
The task moves to the selected column.

**Status:** Passed

---

## TC06 - LocalStorage Persistence
**Steps:**
1. Create or move a task.
2. Refresh the browser page.

**Expected Result:**
The task data remains after refresh.

**Status:** Passed

---

## TC07 - Keyboard Shortcut
**Steps:**
1. Press the "N" key on the keyboard.

**Expected Result:**
The new task form opens or a new task can be created.

**Status:** Passed

---

## TC08 - Empty Column Drop Area
**Steps:**
1. Move all tasks out of a column.
2. Check the empty column.

**Expected Result:**
The empty column displays a "Drop tasks here" area.

**Status:** Passed

---

## Test Summary

| Feature | Status |
|---|---|
| Three columns display | Passed |
| Create task | Passed |
| Edit task | Passed |
| Delete task | Passed |
| Drag and drop | Passed |
| LocalStorage | Passed |
| Keyboard shortcut | Passed |

## Overall Result

All core functionalities were tested successfully, and the app meets the Vibe Coding Challenge requirements.