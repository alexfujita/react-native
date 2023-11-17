import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const styles = StyleSheet.create({
    imageContainer: {
        flex: 25
    },
    image: {
        width: 71,
        height: 100
    },
    header: {
        flex: 75,
        justifyContent: 'space-between'
    },
    headerEdition: {
        fontSize: 12,
        paddingBottom: 7,
        color: '#383838'
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 21
    },
    headerVol: {
        fontSize: 11,
        color: '#DF0101'
    }
})

const ActivityDetail = ({activity}) => {
    const { cover, edition, title, vol, id, image, text, topics } = activity;
    return(
        <Card>
            <CardSection 
                title={title} 
                vol={vol} 
                edition={edition}
                id={id}
                cover={cover}
                image={image}
                text={text}
                topics={topics}
                >
                <View style={styles.imageContainer}>
                    <Image 
                        source={{ uri: cover }} 
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerEdition}>{edition}</Text>
                        <Text style={styles.headerTitle}>{title}</Text>
                    </View>
                    <View>
                        <Text style={styles.headerVol}>xxx Vol. {vol}</Text>
                    </View>
                </View>
            </CardSection>
        </Card>
    )
};

export default ActivityDetail;