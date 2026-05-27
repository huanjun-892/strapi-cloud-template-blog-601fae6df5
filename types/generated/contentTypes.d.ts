import type { Struct, Schema } from '@strapi/strapi';

export interface ApiRecipeRecipe extends Struct.CollectionTypeSchema {
  collectionName: 'recipes';
  info: {
    singularName: 'recipe';
    pluralName: 'recipes';
    displayName: '食谱';
    description: '食谱内容类型';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    cover: Schema.Attribute.Media<'images'>;
    difficulty: Schema.Attribute.Enumeration<['easy', 'simple', 'medium', 'hard']> & Schema.Attribute.Required & Schema.Attribute.DefaultTo<'easy'>;
    cookTime: Schema.Attribute.Integer;
    servings: Schema.Attribute.Integer;
    calories: Schema.Attribute.Integer;
    protein: Schema.Attribute.Float;
    carbs: Schema.Attribute.Float;
    fat: Schema.Attribute.Float;
    ingredients: Schema.Attribute.Component<'recipe.ingredient', true>;
    steps: Schema.Attribute.Component<'recipe.step', true>;
    cuisine: Schema.Attribute.Relation<'manyToOne', 'api::cuisine.cuisine'>;
    regions: Schema.Attribute.Relation<'manyToMany', 'api::region.region'>;
    methods: Schema.Attribute.Relation<'manyToMany', 'api::method.method'>;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    relatedRecipes: Schema.Attribute.Relation<'manyToMany', 'api::recipe.recipe'>;
    relatedKnowledge: Schema.Attribute.Relation<'manyToMany', 'api::knowledge.knowledge'>;
    history: Schema.Attribute.RichText;
  };
}

export interface ApiCuisineCuisine extends Struct.CollectionTypeSchema {
  collectionName: 'cuisines';
  info: {
    singularName: 'cuisine';
    pluralName: 'cuisines';
    displayName: '菜系';
    description: '川菜、粤菜、湘菜等菜系分类';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    cover: Schema.Attribute.Media<'images'>;
    regions: Schema.Attribute.Relation<'manyToMany', 'api::region.region'>;
    methods: Schema.Attribute.Relation<'manyToMany', 'api::method.method'>;
    recipes: Schema.Attribute.Relation<'oneToMany', 'api::recipe.recipe'>;
  };
}

export interface ApiRegionRegion extends Struct.CollectionTypeSchema {
  collectionName: 'regions';
  info: {
    singularName: 'region';
    pluralName: 'regions';
    displayName: '地域';
    description: '四川、广东、湖南等地域分类';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images'>;
    cuisines: Schema.Attribute.Relation<'manyToMany', 'api::cuisine.cuisine'>;
    specialIngredients: Schema.Attribute.Relation<'manyToMany', 'api::ingredient-item.ingredient-item'>;
    recipes: Schema.Attribute.Relation<'manyToMany', 'api::recipe.recipe'>;
  };
}

export interface ApiMethodMethod extends Struct.CollectionTypeSchema {
  collectionName: 'methods';
  info: {
    singularName: 'method';
    pluralName: 'methods';
    displayName: '技法';
    description: '炒、炖、蒸、炸等烹饪技法';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    keyPoints: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images'>;
    recipes: Schema.Attribute.Relation<'manyToMany', 'api::recipe.recipe'>;
    cuisines: Schema.Attribute.Relation<'manyToMany', 'api::cuisine.cuisine'>;
  };
}

export interface ApiIngredientItemIngredientItem extends Struct.CollectionTypeSchema {
  collectionName: 'ingredient_items';
  info: {
    singularName: 'ingredient-item';
    pluralName: 'ingredient-items';
    displayName: '食材库';
    description: '食材详细信息和营养数据';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    category: Schema.Attribute.Enumeration<['pork', 'beef', 'chicken', 'seafood', 'tofu', 'egg', 'vegetable', 'staple', 'soup']> & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    caloriesPer100g: Schema.Attribute.Integer;
    proteinPer100g: Schema.Attribute.Float;
    carbsPer100g: Schema.Attribute.Float;
    fatPer100g: Schema.Attribute.Float;
    fiberPer100g: Schema.Attribute.Float;
    regions: Schema.Attribute.Relation<'manyToMany', 'api::region.region'>;
    pairings: Schema.Attribute.Relation<'manyToMany', 'api::ingredient-item.ingredient-item'>;
    avoidances: Schema.Attribute.Relation<'manyToMany', 'api::ingredient-item.ingredient-item'>;
    substitutes: Schema.Attribute.Relation<'manyToMany', 'api::ingredient-item.ingredient-item'>;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    singularName: 'tag';
    pluralName: 'tags';
    displayName: '场景标签';
    description: '减脂餐、快手菜、夜宵等场景标签';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    recipes: Schema.Attribute.Relation<'manyToMany', 'api::recipe.recipe'>;
  };
}

export interface ApiKnowledgeKnowledge extends Struct.CollectionTypeSchema {
  collectionName: 'knowledge_entries';
  info: {
    singularName: 'knowledge';
    pluralName: 'knowledge-entries';
    displayName: '知识条目';
    description: '美食知识库条目';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    category: Schema.Attribute.Enumeration<['technique', 'ingredient', 'flavor', 'culture', 'history']> & Schema.Attribute.Required;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    cover: Schema.Attribute.Media<'images'>;
    relatedRecipes: Schema.Attribute.Relation<'manyToMany', 'api::recipe.recipe'>;
    relatedKnowledge: Schema.Attribute.Relation<'manyToMany', 'api::knowledge.knowledge'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'api::recipe.recipe': ApiRecipeRecipe;
      'api::cuisine.cuisine': ApiCuisineCuisine;
      'api::region.region': ApiRegionRegion;
      'api::method.method': ApiMethodMethod;
      'api::ingredient-item.ingredient-item': ApiIngredientItemIngredientItem;
      'api::tag.tag': ApiTagTag;
      'api::knowledge.knowledge': ApiKnowledgeKnowledge;
    }
  }
}
