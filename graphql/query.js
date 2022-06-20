import gql from 'graphql-tag';

export const getProduct = gql`
query {
  products(pagination:{
		pageSize: 50
  }) {
    data {
      id
      attributes {
        Name
        Description
        Price
      }
    }
  }
}
`

export const getProductID = gql`
query ($id: ID!) {
  products(filters: {
    id: {eq: $id}
  }) {
    data {
      id
      attributes {
        Name
        Description
        Price
      }
    }
  }
}
`

export const addProduct = gql`
mutation ($txtName: String!, $txtDescription: String!, $txtPrice: Float!) {
	createProduct(data:{
    Name: $txtName,
    Description: $txtDescription,
    Price: $txtPrice
  }) {
    data {
      id 
      attributes{
        Name
        Description
        Price
      }
    }
  }
}
`

export const updateProduct = gql`
mutation ($id: ID!, $txtName: String!, $txtDescription: String!, $txtPrice: Float!) {
  updateProduct(
    data: {
    	Name: $txtName,
      Description: $txtDescription,
      Price: $txtPrice
  	}
    id: $id
  ) {
    data {
      id
      attributes {
        Name
        Description
        Price
      }
    }
  }
}
`

export const deleteProduct = gql`
mutation ($id: ID!) {
  deleteProduct(
    id: $id
  ) {
    data {
      id
      attributes {
        Name
        Description
        Price
      }
    }
  }
}
`

