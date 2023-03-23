
import Index from '../pages/index'
import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/react'
describe('Index',() => {
    describe('Component', () => {
        it('Se renderiza', () => {
            render(
                <Index pokemones={[]}/>
            )
            const paragraph= screen.getByText('Mi App Pokemons')
            expect(paragraph).toBeInTheDocument()

        })
    })
    describe('gesStaticProps', () => {
       
    }) 
})