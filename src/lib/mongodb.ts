import * as mongoose from 'mongoose'

class MongoDB {
  private connection: mongoose.Mongoose | null
  private MONGO_DSN: string =
    process.env.NODE_ENV === 'development'
      ? 'mongodb://localhost:27017/spacedata-dev'
      : process.env.MONGO_DSN!

  public constructor() {
    this.connection = null
  }

  public connect = async () => {
    try {
      this.connection = await mongoose.connect(this.MONGO_DSN, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
    } catch (err) {
      console.log('Wrong MongoDB string, could not be accessed')
    }
  }

  public getConnection = (): mongoose.Mongoose | null => this.connection
}

export const mongodb = new MongoDB()
