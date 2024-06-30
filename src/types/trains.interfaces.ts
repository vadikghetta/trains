

export interface ITrainsRoot {
  name: string
  description: string
  characteristics: ITrainsCharacteristic[]
}

export interface ITrainsCharacteristic {
  speed: number
  force: number
  engineAmperage: number
}