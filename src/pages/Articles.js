import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
// import Article from './Article';
import * as articlesAPI from '../services/articles-api';
import CategorySelector from '../components/CategorySelector';
import queryString from 'query-string';

const categories = [
  {
    value: 'health',
    label: 'Health',
  },
  {
    value: 'technology',
    label: 'Technology',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
];

const getCategoryWithValue = (allCategories, value) =>
  allCategories.find(c => c.value === value);

const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;

export default class ArticlesPage extends Component {
  state = { items: [], categories };

  componentDidMount() {
    const { location } = this.props;

    const category = getCategoryFromLocation(location);

    articlesAPI.fetchArticles(category).then(items => this.setState({ items }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(location);

    if (prevCategory !== nextCategory) {
      articlesAPI
        .fetchArticles(nextCategory)
        .then(items => this.setState({ items }));
    }
  }

  handleCategoryChange = opt => {
    const { history, location } = this.props;

    if (opt) {
      return history.push({ ...location, search: `category=${opt.value}` });
    }

    history.push({ ...location, search: '' });
  };

  render() {
    const { items } = this.state;
    const { location } = this.props;
    const qsCategory = getCategoryFromLocation(location);
    const selectedCategory = getCategoryWithValue(categories, qsCategory);

    return (
      <div>
        <h1>Articles Page</h1>
        <CategorySelector
          options={categories}
          value={selectedCategory}
          onChange={this.handleCategoryChange}
        />
        <ArticleList items={items} />
        {/* <Route path={`${this.props.match.path}/:id`} component={Article} /> */}
      </div>
    );
  }
}

// Не работает вложенный компонент в Articles.js
