import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

// Define the metadata
const meta: Meta = {
    component: Light,
    title: 'Light',
    tags:['autodocs'],
    argTypes:{
        variant:{
            control:{type:'select'},
            options:['green','yellow','red']
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>

export const Base: Story = {

}

export const Base2: Story = {

}



export const Green: Story = {
    args: {
        variant: 'green'
    }
}

export const Yellow: Story = {
    args: {
        variant: 'yellow'
    }
}

export const Red: Story = {
    args: {
        variant: 'red'
    }
}

export const Grouped: Story={
    render:(args)=> <div 
            style={{
                display:'flex',
                flexDirection:'column',
                gap:10,
                border:'1px solid black',
                width:'max-content',
                padding:10
            }}
    >
        <Light variant='green'/>
        <Light variant='yellow'/>
        <Light  variant='red' />
    </div>
}
