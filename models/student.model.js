const { DataTypes } = require('sequelize');
const db = require('../db');

const Lesson = db.lessons;
const Lesson_Student = db.lesson_students;

module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'students',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  
  // Student.associate = (models) => {
  //   const { Lesson, Lesson_Student } = models;
  //   Student.Lessons = Student.belongsToMany(Lesson, {
  //     as: 'lessons',
  //     through: Lesson_Student,
  //     primaryKey: true
  //   });
  // }
  return Student;
}