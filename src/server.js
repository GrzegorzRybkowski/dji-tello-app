const dgram = require('dgram')
// import wait from 'waait'

const PORT = '8889'
const HOST = '190.168.10.1'

const drone = dgram.createSocket('udp4')
drone.bind(PORT)

drone.on('message', message => console.log(`Message :: ${message}`))

function handleError(err) {
  if (err) {
    console.log(`ERROR :: ${err}`)
  }
}

console.log('working')
console.log(drone.send('battery?', 0, 8, PORT, HOST, handleError))
