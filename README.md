# Pagination component

[![npm](https://img.shields.io/npm/v/simple-pagination-component.svg)](https://www.npmjs.com/package/simple-pagination-component)
[![NPM downloads](https://img.shields.io/npm/dm/simple-pagination-component.svg)](https://www.npmjs.com/package/simple-pagination-component)
[![License](https://img.shields.io/npm/l/pagination.svg)](https://www.npmjs.com/package/pagination)

Simple, lightweight npm package without external dependencies

### Install
```javascript
npm i simple-pagination-component
```
### Import
```
import { Pagination } from "simple-pagination-component";
```

## Simple usage:

```javascript
<Pagination
        onPageChange={() => {}}
        totalCount={2000}
        siblingCount={2}
        currentPage={1}
        pageSize={50}
      />
```

![image](https://user-images.githubusercontent.com/15968471/149020221-3d732ac5-077b-4ca5-a603-58f29c25728d.png)

