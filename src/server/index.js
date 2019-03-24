// import dgram from 'dgram'

const dgram = require('dgram')
const wait = require('waait')

const PORT = 8889
const HOST = '192.168.10.1'

function parseState(state) {
  return state
    .split(';')
    .map(x => x.split(':'))
    .reduce((data, [key, value]) => {
      data[key] = value
      return data
    }, {})
}

const drone = dgram.createSocket('udp4')
drone.bind(PORT)

const droneState = dgram.createSocket('udp4')
droneState.bind(8890)

// console.log(droneState)

drone.on('message', message => {
  console.log(`This is real message :: ${message} `)
})
droneState.on('message', message => {
  console.log(`This is state :: ${message} `)
})

// droneState.on('message', message => {
//   console.log(`${message} `)
// })

const handleError = err => {
  if (err) {
    console.error(`This is error from drone :: ${err}`)
  }
}

const commands = ['command', 'battery?', 'takeoff', 'land']
const delays = {
  command: 500,
  'battery?': 1000,
  takeoff: 5000,
  land: 5000,
}

let i = 0

async function go() {
  const command = commands[i]
  const delay = delays[command]

  console.log(`running command :: ${command}`)
  drone.send(command, 0, command.length, PORT, HOST, handleError)

  await wait(delay)

  i += 1

  if (i < commands.length) {
    return go()
  }

  console.log('done')
}

// go()

// export const getDroneBatteryInfo = () => {
// drone.send('command', 0, 7, PORT, HOST, handleError)
droneState.send('command', 0, 7, PORT, HOST, handleError)
// droneState.send('battery?', 0, 8, PORT, HOST, handleError)
// drone.send('wifi?', 0, 8, PORT, HOST, handleError)
// drone.send('temp?', 0, 8, PORT, HOST, handleError)
// }
//
