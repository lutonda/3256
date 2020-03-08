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
    return 'hymn'
  }
 
  static findAll() {
		const sql = 'SELECT * FROM '+this.tableName;
		const params = [null];
		// @ts-ignore
		return this.repository.databaseLayer.executeSql(sql, params).then(({rows}) => rows)
  }
  
  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true }, // For while only supports id as primary key
      number: { type: types.TEXT, not_null: true },
      title: { type: types.TEXT },
      timestamp: { type: types.INTEGER, default: () => Date.now() }
    }
  }
}