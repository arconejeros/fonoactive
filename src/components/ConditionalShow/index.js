const ConditionalShow=({children, condition}) => {
  return condition ? children : null;
};

export default ConditionalShow;
