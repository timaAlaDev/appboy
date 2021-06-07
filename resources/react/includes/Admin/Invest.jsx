import React from 'react'

const Invest = () => {
  return (
    <div className="investment">
      <table border="1px" >
        <tbody>
          <tr>
              <th>Имя пользователя</th>
              <th>ID транзакций</th>
              <th>Дата</th>
              <th>Вознаграждение</th>
              <th>Сумма</th>
              <th>Из проекта</th>
          </tr>
          <tr>
              <td>Maverick </td>
              <td>11111</td>
              <td>31.04.2021</td>
              <td>Сьедобная ложка</td>
              <td>2000 ед.</td>
              <td>Сьедобные ложки и ножи</td>
          </tr>
          <tr>
              <td>Hope</td>
              <td>22222</td>
              <td>31.04.2021</td>
              <td>Сьедобная ложка</td>
              <td>2000 ед.</td>
              <td>Сьедобные ложки и ножи</td>
          </tr>
          <tr>
              <td>Mark</td>
              <td>33333</td>
              <td>31.04.2021</td>
              <td>Сьедобная ложка</td>
              <td>2000 ед.</td>
              <td>Сьедобные ложки и ножи</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Invest
