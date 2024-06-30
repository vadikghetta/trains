

export interface ITrainsRoot {
  name: string
  description: string
  characteristics: ITrainsCharacteristic[]
  id: string
}

export interface ITrainsCharacteristic {
  speed: number
  force: number
  engineAmperage: number
}