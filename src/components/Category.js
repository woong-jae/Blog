import React from "react"
import styled from "styled-components"

const CategoryWrapper = styled.div`
    color: ${props => props.theme.colors.whiteSmoke};
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    margin-bottom: 20px;
`;

const ActiveBubble = styled.div`
    background-color: ${props => props.theme.colors.blackLight};
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    margin: 0 5px;
    padding: 5px 12px;
    color: ${props => props.theme.colors.whiteSmoke};
    font-size: 0.7em;
    text-align: center;
    user-select: none;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        font-size: 0.6em;
    }
    &:hover {
        transform: rotate(5deg);
        background: ${props => props.theme.colors.gradient};
        color: ${props => props.theme.colors.blackLight};
    }
`

const DisabledBubble = styled.div`
    border-radius: 30px;
    margin: 0 5px;
    padding: 5px 12px;
    transform: rotate(5deg);
    background: ${props => props.theme.colors.gradient};
    color: ${props => props.theme.colors.blackLight};
    font-size: 0.7em;
    text-align: center;
    user-select: none;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
        font-size: 0.6em;
    }
`

const Bubble = ({ category, changeCategory }) => {
    const { name, slug } = category;
    return (
        <ActiveBubble onClick={() => changeCategory(slug)}>
            {name}
        </ActiveBubble>
    )
}

const SelectedBubble = ({ category }) => {
    const { name } = category;
    return (
        <DisabledBubble>
            {name}
        </DisabledBubble>
    )
}

const Category = ({ category, categories, changeCategory }) => {
    return (
        <CategoryWrapper>
            {categories.map(item => {
                if (category === item.slug) return <SelectedBubble category={item} />
                return <Bubble category={item} key={item.slug} changeCategory={changeCategory} />
            })}
        </CategoryWrapper>
    )
}

export default Category;