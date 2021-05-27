import React from 'react';
import { View, Text, Button, Modal, ScrollView, Image, StyleSheet} from 'react-native';

const SampleModal = props => {
    return (
        <Modal visible={props.visible}>
            <ScrollView>
              <Image style={styles.image} source={require('../assets/image.jpg')} />
              <Text style={styles.text}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus non enim praesent elementum facilisis leo vel fringilla. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Velit dignissim sodales ut eu sem. Dictum non consectetur a erat nam at. Duis at consectetur lorem donec massa. Nisl suscipit adipiscing bibendum est ultricies integer. Ut consequat semper viverra nam libero justo laoreet sit. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus ut faucibus pulvinar elementum integer enim neque. Et netus et malesuada fames ac turpis egestas integer. Enim tortor at auctor urna nunc id cursus metus. {'\n\n'}

    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Diam vel quam elementum pulvinar etiam non quam lacus. Id donec ultrices tincidunt arcu non. Aliquet lectus proin nibh nisl condimentum id venenatis a. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Eget gravida cum sociis natoque penatibus et magnis. Ut morbi tincidunt augue interdum velit. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Vulputate dignissim suspendisse in est ante in. {'\n\n'}

    Iaculis urna id volutpat lacus laoreet. Sit amet venenatis urna cursus eget nunc scelerisque. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Bibendum ut tristique et egestas quis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Habitant morbi tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Nunc id cursus metus aliquam. Semper auctor neque vitae tempus quam pellentesque. Venenatis cras sed felis eget velit aliquet sagittis. Nec ultrices dui sapien eget mi proin sed. Elit ut aliquam purus sit. Nec ullamcorper sit amet risus nullam. Neque sodales ut etiam sit amet nisl purus in. Nunc sed id semper risus in hendrerit gravida rutrum. Commodo ullamcorper a lacus vestibulum. {'\n\n'}

    Non enim praesent elementum facilisis. Interdum velit laoreet id donec ultrices tincidunt arcu non. Aliquam sem et tortor consequat id porta nibh venenatis. Et malesuada fames ac turpis egestas. Vulputate ut pharetra sit amet aliquam id. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Elit eget gravida cum sociis natoque penatibus. Vitae suscipit tellus mauris a diam maecenas sed enim. Sit amet purus gravida quis. Nunc mattis enim ut tellus elementum sagittis vitae. Nunc faucibus a pellentesque sit. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. {'\n\n'}

    Neque volutpat ac tincidunt vitae semper quis lectus. Pharetra et ultrices neque ornare aenean. Viverra orci sagittis eu volutpat. Elementum nisi quis eleifend quam adipiscing vitae proin. Ultricies integer quis auctor elit sed vulputate mi sit. Quis lectus nulla at volutpat diam ut venenatis tellus in. Facilisis mauris sit amet massa vitae. In egestas erat imperdiet sed euismod. Ornare massa eget egestas purus viverra accumsan in. Semper risus in hendrerit gravida. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Pellentesque nec nam aliquam sem. At urna condimentum mattis pellentesque. Enim ut sem viverra aliquet eget sit. A erat nam at lectus urna duis convallis convallis. Massa massa ultricies mi quis hendrerit dolor magna. Leo vel fringilla est ullamcorper eget nulla. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Risus at ultrices mi tempus imperdiet nulla. Nec ullamcorper sit amet risus nullam eget. {'\n\n'}
              </Text>
            </ScrollView>
            <View style={styles.closeButton}> 
                <Button color='red' title="Close" onPress={props.onClose} />
            </View>   
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    closeButton: {
      width: '20%',
      flex: 1,
      alignSelf: 'center',
      position: 'absolute',
      bottom: 20
    },
    image: {
      width: 150,
      height: 150,
      alignSelf: 'center'
    },
    text: {
      padding: 20,
      textAlign: 'justify'
    }
  });
  
export default SampleModal;
