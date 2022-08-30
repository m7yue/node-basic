import Stream from 'stream'

const wite_read_stream = () => {
  const readableStream = new Stream.Readable({
    read() {
    }
  })

  readableStream.on('readable', () => {
    console.log('readableStream on readable data:', readableStream.read().toString())
  })

  const writableStream = new Stream.Writable({})

  writableStream._write = (chunk, encoding, next) => {
    console.log(chunk.toString())
    next()
  }

  writableStream.write('hey!\n')
  writableStream.write('7yue!\n')

  // readableStream.pipe(process.stdout)
  readableStream.pipe(writableStream)

  readableStream.push('hi!\n')
  readableStream.push('ho!\n')

  writableStream.end()
}

// wite_read_stream()

const duplexStream = () => {
  const duplex = new Stream.Duplex({
    write(this, chunk, encoding, callback) {
      console.log(chunk.toString())
      callback()
    },
    read() {
  
    }
  })
  
  duplex.on('readable', () => {
    console.log('readableStream on readable data:', duplex.read().toString())
  })
  
  duplex.write('hey!\n')
  duplex.write('7yue!\n')
  
  duplex.push('hi!\n')
  duplex.push('ho!\n')
  
  duplex.pipe(process.stdout)  
}

duplexStream()
