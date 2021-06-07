import React from 'react'

export default function bill () {
  return (
    <div>
      <div className= "bill">
          <h2>Счет пользователя</h2>

          <div>
            <label>Имя пользователя:</label>
            <span>Username</span>
          </div>

          <div>
            <label>Средства на счету:</label>
            <span>2000ед.</span>
          </div>

          <div>
            <p>
              Для пополнения средств вам необходимо иметь аккаунт в системе токенов cpNet.
            </p>

            <div className = "konvert">
              <label >
                Конвертация:
              </label>
              <span>
                1 (cpNet) = 1000ед.
              </span>
            </div>
          </div>

          <button>
            пополнить средства
          </button>

      </div>
    </div>
  )
}