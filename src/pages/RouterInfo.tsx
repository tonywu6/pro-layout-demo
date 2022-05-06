import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router';
import { Card } from 'antd';
import { PageContainer, RouteContext } from '@ant-design/pro-layout';

const GenericPathVariable: React.FC = () => {
  const match = useRouteMatch();
  const { pageTitleInfo } = useContext(RouteContext);
  return (
    <PageContainer>
      <Card>
        <h3>
          <code>match.path = {match.path}</code>
        </h3>
        <h3>
          <code>pageTitleInfo.title = {pageTitleInfo?.title}</code>
        </h3>
      </Card>
    </PageContainer>
  );
};

export default GenericPathVariable;
