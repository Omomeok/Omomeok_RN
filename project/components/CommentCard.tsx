import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { useState } from 'react';
import Colors from '@/constants/Colors';

interface CommentCardProps {
  author: string;
  content: string;
  date: string;
  isNew?: boolean;
}

export default function CommentCard({ 
  author, 
  content, 
  date,
  isNew = false 
}: CommentCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{author}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{date}</Text>
            {isNew && <View style={styles.newBadge}><Text style={styles.newText}>신규</Text></View>}
          </View>
        </View>
        <TouchableOpacity 
          style={styles.expandButton}
          onPress={() => setExpanded(!expanded)}
        >
          {expanded ? 
            <ChevronUp size={20} color="#888" /> : 
            <ChevronDown size={20} color="#888" />
          }
        </TouchableOpacity>
      </View>
      
      <View style={styles.contentContainer}>
        <Text 
          style={styles.content}
          numberOfLines={expanded ? undefined : 2}
        >
          {content}
        </Text>
      </View>
      
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>회원정보</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>비밀번호 변경</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E1EBFD',
  },
  authorContainer: {
    flex: 1,
  },
  author: {
    fontSize: 16,
    fontFamily: 'NotoSansKR-Medium',
    marginBottom: 2,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'NotoSansKR-Regular',
  },
  newBadge: {
    backgroundColor: '#FF6B6B',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  newText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'NotoSansKR-Medium',
  },
  expandButton: {
    padding: 4,
  },
  contentContainer: {
    marginBottom: 16,
  },
  content: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'NotoSansKR-Regular',
  },
  actionBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  actionText: {
    fontSize: 14,
    color: Colors.light.tint,
    fontFamily: 'NotoSansKR-Medium',
  },
  divider: {
    width: 1,
    backgroundColor: '#F0F0F0',
  },
});