import React from 'react';
import { shallow } from 'enzyme';
import ItemDetail from '../index';


const defaultProps = {
  item: {},
  onClick: f => f,
  onDelete: f => f
};

describe('<ItemDetail />', () => {
  it('renders without crashing', () => {
    const item = { id: 1, content: 'Test 1', isDone:false };
    shallow(<ItemDetail {...defaultProps} item={item} />);
  });

  it('should render item as list item', () => {
    const item = { id: 1, content: 'Test 1', isDone:false };
    
    const renderedItem = shallow(<ItemDetail {...defaultProps} item={item} />);
    expect(renderedItem.find('.itemDetail-li')).toHaveLength(1);
  });

  it('should display item-done if item is done', () => {
    const item = { id: 1, content: 'Test 1', isDone:true };
    
    const renderedItem = shallow(<ItemDetail {...defaultProps} item={item} />);
    expect(renderedItem.find('.item-done')).toHaveLength(1);
  });

  it('should not display item-done if item is not done', () => {
    const item = { id: 1, content: 'Test 1', isDone:false };
    const renderedItem = shallow(<ItemDetail {...defaultProps} item={item} />);
    expect(renderedItem.find('.item-done')).toHaveLength(0);
  });

  it('should call onClick with the title', () => {
    const item = { id: 1, content: 'Test 1', isDone:false },
      onClickMock = jest.fn();
    const renderedItem = shallow(<ItemDetail {...defaultProps} item={item} onClick={onClickMock} />);
    renderedItem.find('span').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it('should call onClick with the title', () => {
    const item = { id: 1, content: 'Test 1', isDone:false },
      onDeleteMock = jest.fn();
    const renderedItem = shallow(<ItemDetail {...defaultProps} item={item} onDelete={onDeleteMock} />);
    renderedItem.find('input').simulate('click');
    expect(onDeleteMock.mock.calls.length).toBe(1);
  });
});
