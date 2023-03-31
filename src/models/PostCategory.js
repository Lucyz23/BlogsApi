module.exports = (sequelize, DataTypes) => {
    const postCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });
  
    postCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        otherKey: 'categoryId',
        as: 'categories',
        through: postCategory,
      });
  
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        otherKey: 'postId',
        as: 'posts',
        through: postCategory,
      });
    };
  
    return postCategory;
  };