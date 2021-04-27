import React from 'react'

export default function() {
  return(
    <div>
      Вы авторезировались :) Если хотите выйти, нажмите ;) ->
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.reload();
      }}>Press me</button>
    </div>
  )
}
