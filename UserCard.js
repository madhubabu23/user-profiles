
import React from 'react';
import { Card, Button } from 'antd';

function UserCard({ user, onEdit }) {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <Card
      cover={<img alt={user.username} src={avatarUrl} />}
      actions={[
        <Button type="link" onClick={() => onEdit(user)}>
          Edit
        </Button>,
      ]}
    >
      <Card.Meta
        title={user.name}
        description={
          <>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </>
        }
      />
    </Card>
  );
}

export default UserCard;