import { useContext } from "react"
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
  const { alert } = useContext(AlertContext)
  return alert !== null && (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" >
      <div className="flex justify-center ">
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
        <div className="inline-block mt-20 align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">

          < div className="text-center px-20 py-10" >
            {
              alert.type === 'error' && (
                <h1 className="font-bold" style={{ color: 'red', fontSize: '36px' }}>ERROR!</h1>
              )
            }
            <p style={{ color: 'black' }}>{alert.msg}</p>

          </div >
        </div >

      </div>
    </div >
  )
}

export default Alert