import React from 'react';

function TodoItem({ isCompleted, todo }) {
  return (
    <ul>
      <li>
        <label>
          <input type="checkbox" checked={isCompleted} readOnly />
          {/*todo: readonly -> onChange로 수정 가능하게 */}
          <span>{todo}</span>
        </label>
      </li>
    </ul>
  );
}

export default TodoItem;
