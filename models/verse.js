
import { SQLite } from 'expo-sqlite'
import { BaseModel, types } from 'expo-sqlite-orm'
 
export default class Hymn extends BaseModel {
  constructor(obj) {
    super(obj)
  }
 
  static get database() {
    return async () => SQLite.openDatabase('hymn-database.db')
  }
 
  static get tableName() {
    return 'verse'
  }
 
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
      number: { type: types.TEXT, not_null: true },
      value: { type: types.TEXT },
      choir: { type: types.BOOLEAN },
      hymn_id: { type: types.INTEGER },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}
