import { View, Text, Image } from 'react-native'

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
      }}>{subTitle}</Text>
    </View>
  )
}

export const ETHPrice = ({ price }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center"}}>
        <Image
            source={assets.eth}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 2 }}
        />
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary
        }}>{price}</Text>
      </View>
    )
}

export const ImageCMP = ({ imgUrl, index }) => {
    return (
      <View>
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES?.font
            }}
        />
      </View>
    )
}

export const People = () => {
    persons = [assets.person01, assets.person02, assets.person03];
    return (
      <View style={{ flexDirection: "row"}}>
        {persons?.map((person, index) => (
            <ImageCMP
                imgUrl={person}
                key={`people-index-${index}`}
                index={index}
            />
        ))}
      </View>
    )
}


export const EndDate = () => {
    return (
      <View
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: "50%"
        }}
      >
        <Text style={{ 
            fontFamily: FONTS.regular, 
            fontSize: SIZES.small,
            color: COLORS.primary
        }}>
            Ending
        </Text>
        <Text style={{ 
            fontFamily: FONTS.semiBold, 
            fontSize: SIZES.medium,
            color: COLORS.primary
        }}>
            12h 30m
        </Text>
      </View>
    )
}

export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: - SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <People/>
        <EndDate/>
      </View>
    )
  }