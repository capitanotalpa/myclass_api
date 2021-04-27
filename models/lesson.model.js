const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const Lesson = sequelize.define('Lesson', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'lessons',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  Lesson.associate = (models) => {
    const { Student, Teacher, Lesson_Student, Lesson_Teacher } = models;
    Lesson.students = Lesson.belongsToMany(Student, {
      as: 'students',
      through: Lesson_Student,
      foreignKey: 'lesson_id',
      otherKey: 'student_id'
    });
    Lesson.teachers = Lesson.belongsToMany(Teacher, {
      as: 'teachers',
      through: Lesson_Teacher,
      foreignKey: 'lesson_id',
      otherKey: 'teacher_id'
    })
    return Lesson;
  }
  return Lesson;
}