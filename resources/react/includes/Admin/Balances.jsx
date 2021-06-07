import React from 'react'


const Balance = () => {


  return (
    <div className="balance">
      <table border="1px">
          <tr>
              <th>Имя пользователя</th>
              <th>Баланс</th>
              <th>Поплнение</th>
          </tr>
          <tr>
              <td>Maverick </td>
              <td>11111</td>
              <td className="width400">
                <input type="number" /> 
                <button type="submit" >Пополнить</button>
              </td>
          </tr>
          <tr>
              <td>Hope</td>
              <td>22222</td>
              <td className="width400">
                <input type="number" /> 
                <button type="submit">Пополнить</button>
              </td>
          </tr>
          <tr>
              <td>Mark</td>
              <td>33333</td>
              <td className="width400">
                <input type="number"/> 
                <button type="submit">Пополнить</button>
              </td>
          </tr>
      </table>
    </div>
  )
}
export default Balance