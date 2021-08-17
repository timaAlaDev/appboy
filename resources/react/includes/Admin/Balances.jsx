import React from 'react'


const Balance = () => {


  return (
    <div className="balance">
      <input type="text" />
      <table border="1px">
        <tbody>
          <tr>
              <th>Имя пользователя</th>
              <th>id пользователя</th>
              <th>Баланс</th>
              <th>Поплнение</th>
          </tr>
          <tr>
              <td>Maverick </td>
              <td>1</td>
              <td>11111</td>
              <td className="width400">
                <input type="number" /> 
                <button type="submit" >Пополнить</button>
              </td>
          </tr>
          <tr>
              <td>Hope</td>
              <td>2</td>
              <td>22222</td>
              <td className="width400">
                <input type="number" /> 
                <button type="submit">Пополнить</button>
              </td>
          </tr>
          <tr>
              <td>Mark</td>
              <td>3</td>
              <td>33333</td>
              <td className="width400">
                <input type="number"/> 
                <button type="submit">Пополнить</button>
              </td>
          </tr>
        </tbody> 
      </table>
    </div>
  )
}
export default Balance