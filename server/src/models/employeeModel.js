import Sequelize from 'sequelize'
import { db } from './sequelize_connection';
db.define('employee', {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    state: {
      type: Sequelize.STRING,
      allowNull: true
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true
    },
    designation: {
      type: Sequelize.STRING,
      allowNull: true
    },
    dateOfJoining: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    isActive: {
      type: Sequelize.ENUM('active', 'pending', 'deleted'),
      defaultValue:'pending',
      allowNull: false
    },
    createdAt:{
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    updatedAt:{
      type: Sequelize.DATEONLY,
      allowNull: false
    }
	}, {
		tableName: 'employee'
	})
const EmployeeModel = db.models.employee;
export {EmployeeModel};