import React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar: React.FC = () => {
    return (
        <Appbar accessibilityComponentType={undefined} accessibilityTraits={undefined}>
            <Appbar.Action
                icon="archive"
                onPress={() => console.log('Pressed archive')}
                accessibilityComponentType={undefined}
                accessibilityTraits={undefined}
            />
            <Appbar.Action accessibilityComponentType={undefined} accessibilityTraits={undefined} icon="mail" onPress={() => console.log('Pressed mail')} />
            <Appbar.Action accessibilityComponentType={undefined} accessibilityTraits={undefined} icon="label" onPress={() => console.log('Pressed label')} />
            <Appbar.Action accessibilityComponentType={undefined} accessibilityTraits={undefined}
                icon="delete"
                onPress={() => console.log('Pressed delete')}
            />
        </Appbar>
    );
}

export default TopBar;